function externe(msg) {

  function interne() {
    console.log(msg);
    msg = null;
  }

  return interne;
}

const hello = externe('Hello');
hello();

// pile d'appels
// ^
// |
// |externe - interne/hello
// +--------------------------------------> temps

for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
}

for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
