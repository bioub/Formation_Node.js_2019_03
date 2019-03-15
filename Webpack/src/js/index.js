// import '@babel/polyfill';
import 'core-js/fn/promise';
import { titi } from './test-tree-shaking';
// ou import '@babel/polyfill';

const divElt = document.querySelector('.horloge');

console.log(titi);

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
