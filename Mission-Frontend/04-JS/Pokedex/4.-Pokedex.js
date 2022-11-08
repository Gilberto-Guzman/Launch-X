// const fetchPokemon = () => {
//     const pokeNameInput = document.getElementById("pokeName");
//     let pokeName = pokeNameInput.value;
//     pokeName = pokeName.toLowerCase();
//     const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
//     fetch(url).then((res) => {
//         if (res.status != "200") {
//             console.log(res);
//             pokeImage("img/pokemon-sad.gif");
//         }
//         else {
//             return res.json();
//         }
//     }).then((data) => {
//         if (data) {
//             console.log(data);
//             let pokeImg = data.sprites.front_default;
//             pokeImage(pokeImg);
//             console.log(pokeImg);
//         }
//     });
// }

const fetchPokemon = async () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let data = await fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("img/pokemon-sad.gif");
        }
        else {
            return res.json();
        }
    })
    
    if (data) {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeInfo = data.abilities;
        pokeImage(pokeImg);
        pokeData(pokeInfo);
        console.log(pokeImg);
    }
}

const pokeImage= (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeData = (abilities) => {
    const pokeAbilities = document.getElementById("abilities"); 
    const abilitiesName = abilities.map(item => item.ability.name);
    console.log('abilities full', abilities);
    console.log('abilities Names', abilitiesName);

    // pokeAbilities.innerHTML = "<p>" + abilitiesName[0] + "</p>";
    pokeAbilities.innerHTML = abilitiesName;
}

