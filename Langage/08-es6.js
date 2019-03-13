// REST Params
// conversion liste de valeurs (séparées par des ,) -> tableau
function sum(...nbs) {
  return nbs.reduce((acc, nb) => acc + nb);
}

console.log(sum(1, 2, 3, 4)); // 10

// SPREAD
// tableau -> conversion liste de valeurs (séparées par des ,)

const nbs = [1, 2, 3, 4];
function multiply(a, b, c, d) {
  return a * b * c * d;
}

console.log(multiply(...nbs)); // 10

// Cloner un tableau (shallow copy, que le premier niveau du tableau)
// pour un deep copy -> lodash
const clone = [...nbs];

// Destructurer un tableau
//    [1 , 2, 3    , 4]
const [un,  , trois,  , cinq = 5, ...otherNbs] = nbs;
const fullName = 'Romain Bohdanowicz';
const [prenom = '', nom = ''] = fullName.split(' ');
console.log(prenom); // Romain


// Destructurer un objet
const coords = {x: 10, y: 20};
//    {x: 10, y: 20  }
const {x    , y: varY, z = 30} = coords;


function* myGen() {
  yield 1;
  yield 2;
}

const nombres = myGen();

console.log(nombres.next().value);
console.log(nombres.next().value);
