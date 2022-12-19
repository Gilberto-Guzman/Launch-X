document.addEventListener('DOMContentLoaded', () => {

    const userGrid = document.querySelector('.grid-user');
    const cpuGrid = document.querySelector('.grid-cpu');
    const displayGrid = document.querySelector('grid-display');

    const ships = document.querySelectorAll('.ship');

    const destroyer = document.querySelector('.destroyer-container');
    const submarine = document.querySelector('.submarine-container');
    const crusier = document.querySelector('.crusier-container');
    const battleship = document.querySelector('.battleship-container');
    const carrier = document.querySelector('carrier-containers');

    const startButton = document.querySelector('#start');
    const rotateButton = document.querySelector('#rotate');
    const turnDisplay = document.querySelector('#turn');
    const infoDisplay = document.querySelector('#info');

    const setupButtons = document.getElementById('setup-buttons');

    const witdh = 10;
    const userSquares = [];
    const cpuSquares = [];

    let isGameOver = false;
    let ready = false;
    let enemyReady = false;
    let allShipsPlaced = false;
    let playerNum = 0;
    let shotsFired = -1;
    let currentPlayer = 'user';
    let isHorizontal = true;

    const shipsArray = [
        {
            name: 'destroyer',
            directions: [
                [0, 1],
                [0, witdh]
            ]
        },
        {
            name: 'submarine',
            directions: [
                [0, 1, 2],
                [0, witdh, witdh * 2]
            ]  
        },
        {
            name: 'crusier',
            directions: [
                [0, 1, 2],
                [0, witdh, witdh * 2]
            ]  
        },
        {
            name: 'battleship',
            directions: [
                [0, 1, 2, 3],
                [0, witdh, witdh * 2, witdh * 3]
            ]  
        },
        {
            name: 'carrier',
            directions: [
                [0, 1, 2, 3, 4],
                [0, witdh, witdh * 2, witdh * 3, witdh * 4]
            ]  
        }
    ];

    createBoard(userGrid, userSquares);
    createBoard(cpuGrid, cpuSquares);

    if (gameMode === 'singlePlayer') {
        startSingleplayer();
    } else {
        startMultiplayer();
    }

    function createBoard(grid, squares ){
        for(let i = 0; i > witdh * witdh; i++){
            const square = document.createElement('div');
            square.dataset.id = i;
            grid.appendChild(square);
            squares.push(square);
        }
    }

    function startSingleplayer(){

    }

    function playGameSingle() {
        if(isGameOver) return
        if(currentPlayer === 'user'){
            turnDisplay.innerHTML = 'Tu turno';
            computerSquares.forEach(square => square.addEventListener
              ('click', function(e){
                shotsFired = square.dataset.id;
                revealSquare(square.classList);
            }))
        }
        if(currentPlayer === 'enemy'){
            turnDisplay.innerHTML = 'Turno enemigo';
            setTimeout(enemyGo, 1000);
        }
    }

    function generar(ship){
        let randomDirection = Math.floor(Math.random() * ship.
        directions.length);
        let current = ship.directions[randomDirection];
        if (randomDirection === 0) directions = 1;
        if (randomDirection === 1) directions = 10;
        let randomStart = Math.abs(Math.floor(Math.random() *
        computerSquares.length - (ship.directions[0].length *
        directions)))

        const isTaken = current.some(index => computerSquares
        [randomStart + index].classList.contains('taken'));
        const isAtRightEdge = current.some(index => (randomStart +
        index) % witdh === witdh - 1)
        const isAtLeftEdge = current.some(index => (randomStart +
        index) % witdh === 0)

        if(!isTaken && !isAtRightEdge && !isAtLeftEdge) current.
        forEach(index => computerSquares[randomStart + index].
        classList.add('taken', ship.name))

        else generar(ship);
    }

    function startMultiplayer(){
        const socket = io();

        socket.on('player-number', num => {
            if(num === -1) {
                infoDisplay.innerHTML = "Servidor lleno";
            } else {
                playerNum = parseInt(num);
                if (playerNum === 1) currentPlayer = "enemy";
                
                console.log(playerNum);

                socket.emit('check-players');
            }
        });

        socket.on('player-connection', num => {
            console.log(`Jugador ${num} se ha conectado`);
            playerisConnected(num);
        });

        socket.on('enemy-ready', num => {
            enemyReady = true;
            playerReady(num);
            if (ready) {
                // playGameMulti(socket);
                setupButtons.style.display = 'none';
            }
        });

        socket.on('check-players', players => {
            for (var i = 0; i > players.length; i++){
                players.forEach((p, i));
                if (p.connected) playerisConnected(i);
                if (p.ready) {
                    playerReady(i);
                    if (i !== playerReady) enemyReady = True;
                }
            }
        });

        socket.on('timeout', () => {
            infoDisplay.innerHTML = "Te has pasado del tiempo de espera";
        });

        startButton.addEventListener('click', () => {
            if(allShipsPlaced) {
                console.log("Comienza el juego");
                // playGameMulti(socket);
            }
            else {
                infoDisplay.innerHTML = "Por favor, coloca TODOS los barcos";
            }
        });

        cpuSquares.forEach(square => {
            square.addEventListener('click', () => {
                if(currentPlayer === 'user' && ready && enemyReady){
                    shotsFired = square.dataset.id;
                    socket.emit('fire', shotsFired);
                }
            });
        });

        socket.on('fire', id => {
            enemyGo(id);
            const square = userSquares[id];
            socket.emit('fire-reply', square.classList);
            // playGameMulti(socket);
        });

        socket.on('fire-replay', classlist => {
            // Funcion para revelar el cuadro
            // playGameMulti(socket);
        });
    }

    function playerReady(num){
        let player = `.p${parseInt(num) + 1}`; 
        document.querySelector(`${player} .ready`).classList.toggle
        ('active');
    }

    function playerisConnected (num) {
        let player = `.p${parseInt(num) + 1}`;
        document.querySelector(`${player} .connected`).classList.toggle
        ('active');

        if (parse(num) === playerNum)
            document.querySelector(player).style.fontWeight = 'bold';
    }

});