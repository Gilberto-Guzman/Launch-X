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

    function generar(ship){
        let randomDirection = Math.floor(Math.random() * ship.
        directions.length);
        let current = ship.directions[randomDirection];
        if (randomDirection === 0) directions = 1;
        if (randomDirection === 1) directions = 10;

        const isTaken = current.some(index => cpuSquares[index].
        classList.contains('taken'));

        const isAtRightEdge = current.some(index => (index) % witdh 
        === witdh - 1);

        const isAtLeftEdge = current.some(index => (index) % witdh 
        === witdh - 0);


    }
});