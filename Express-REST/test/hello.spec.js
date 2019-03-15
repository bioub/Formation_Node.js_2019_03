'use strict';

const hello = require('../hello');
const expect = require('chai').expect;

describe('#hello()', () => {

  it('should return "Bonjour Romain"', () => {
    expect(hello('Romain')).to.equal('Bonjour Romain');
  });

});
