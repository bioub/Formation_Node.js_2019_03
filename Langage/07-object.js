// 3 possibilité pour créer de nouveaux objet

// object literal
// - l'objet est suffisament simple à créer pour se passer d'une fonction
// - s'il contient un méthode, il doit mono instancié
const coords = {
  x: 10,
  y: 20,
};

const MyMath = {
  sum: function(a, b) {
    return Number(a) + Number(b);
  },
};

// s'il y avait un 2e MyMath, on dupliquerait la fonction sum avec cette syntaxe
// const MyMath2 = {
//   sum: function(a, b) {
//     return Number(a) + Number(b);
//   },
// };

// factory function
// - l'objet est suffisament compliqué à créer pour privilégier une fonction
// - s'il contient un méthode, il doit mono instancié

function coordsFactory(x, y, z) {
  x = x || 0;
  y = y || 0;

  const coords = {
    x: x,
    y: y,
  };

  if (z !== undefined) {
    coords.z = z;
  }

  return coords;
}

const coords2d = coordsFactory();
const coords3d = coordsFactory(10, 20, 30);

console.log(JSON.stringify(coords2d)); // {"x":0,"y":0}
console.log(JSON.stringify(coords3d)); // {"x":10,"y":20,"z":30}

const json = JSON.stringify(coords3d);
// ... réseau ...

const coordsFromJSON = JSON.parse(json);
console.log(coordsFromJSON.z); // 30

// Boucler sur les clés
for (const key in coords) {
  console.log(key);
  console.log(coords[key]);
}

// constructor function
// - l'objet est suffisament compliqué à créer pour privilégier une fonction
// - il peut contenir des méthodes même multi-instanciés
// - on pourra tester son type et hériter d'autres type

function Coords(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;

  if (z !== undefined) {
    this.z = z;
  }
}

Coords.getClass = function() {
  return 'Coords';
};

Coords.prototype.infos = function() {
  return 'x : ' + this.x;
};

const coordsA = new Coords();
console.log(typeof coordsA); // object

console.log(coordsA instanceof Coords); // true
console.log(coordsA instanceof Object); // true

console.log(Coords.getClass());
console.log(coordsA.infos());
console.log(coordsA.hasOwnProperty('x')); // true
console.log(coordsA.hasOwnProperty('infos')); // false (pas une clé de l'objet)


const coordsB = new Coords();
console.log(coordsA.infos === coordsB.infos); // true
