const nbs = [2, 3, 4];

// paradigme impératif
for (let i = 0; i < nbs.length; i++) {
  const nb = nbs[i];
  if (nb % 2 === 0) {
    console.log(nb ** 2);
  }
}

// paradigme functionnel
nbs
  .filter((nb) => nb % 2 === 0)
  .map((nb) => nb ** 2)
  .forEach((nb) => console.log(nb));

console.log(nbs.reduce((acc, nb) => acc + nb, 0));

console.log('Fin');

// pile d'appels
// ^
// |                         log  log
// |=> - => - =>   => - =>   => - =>
// |filter       - map     - forEach - log
// +--------------------------------------> temps
//                           4    16   Fin
