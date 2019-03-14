// import '@babel/polyfill';
import 'core-js/fn/promise';
// ou import '@babel/polyfill';

const divElt = document.querySelector('.horloge');

/*
document.addEventListener('click', async () => {
  const { Horloge } = await import('./horloge');
  const clock = new Horloge(divElt);
  clock.start();
});
*/

document.addEventListener('click', () => {
  import('./horloge').then(({ Horloge }) => {
    const clock = new Horloge(divElt);
    clock.start();
  })
});
