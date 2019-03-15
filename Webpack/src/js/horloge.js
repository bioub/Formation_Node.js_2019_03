// import { format } from 'date-fns';
import format from 'date-fns/format'


class Horloge {
  /**
   * @constructor
   * @param {HTMLElement} container
   */
  constructor(container) {
    this._container = container;
  }

  _render() {
    const now = new Date();
    this._container.innerText = format(now, 'HH:mm:ss');
  }

  start() {
    this._render();
    setInterval(this._render.bind(this), 1000);
  }
}

export {
  Horloge,
};
