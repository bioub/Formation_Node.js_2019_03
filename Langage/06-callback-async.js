setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 1000);
// setTimeout(() => console.log('Z'), Math.random() * 1000);
setTimeout(() => console.log('C'), 0);
setTimeout(() => console.log('D'), 500);

console.log('E');


// pile d'appels
// ^
// |
// |                            log     log   log     log
// |st - st - st - st - log ... cbC ... cbA - cbD ... cbB
// +----------0-----------------3-------501---502-----1001----> temps
//                      E       C       A     D       B

// file d'attente (0ms) : cbC
// file d'attente (3ms) :
// file d'attente (500ms) : cbA - cbD
// file d'attente (501ms) : cbD
// file d'attente (502ms) :
// file d'attente (1000ms) : cbB
// file d'attente (1001ms) :
