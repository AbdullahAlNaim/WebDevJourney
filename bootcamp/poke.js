//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png

// for (let x = 0; x < 100; x++) {
//     const xyz = document.createElement('button');
//     xyz.innerText = "Hello Im new";
//     teest.appendChild(xyz);
// }


// let contain = document.querySelector('#container');
// for (x = 0; x < 100; x++) {
//     let button = document.createElement('button');
//     button.innerText = "Press me";
//     contain.appendChild(button);
// }

const bod = document.querySelector('h1');
for (let x = 1; x <= 151; x++) {
    let pok = document.createElement('img');
    pok.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${x}.png`
    bod.appendChild(pok);
}