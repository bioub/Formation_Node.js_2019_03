function externe(msg) {

  function interne() {
    console.log(msg);

  }

  interne();
}

externe('Hello');

// pile d'appels
// ^
// |interne
// |externe
// +--------------------------------------> temps

