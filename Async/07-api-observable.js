const { Observable, interval } = require('rxjs');
const { mapTo } = require('rxjs/operators');


/*
function interval(delayMs) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next(delayMs);
    }, delayMs);
  });
}

interval(1000)
  .subscribe((delayMs) => console.log(delayMs + 'ms'));
*/

interval(1000).pipe(
  mapTo(1000)
)
  .subscribe((delayMs) => console.log(delayMs + 'ms'));
