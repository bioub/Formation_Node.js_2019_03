'use strict';


const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const User = require('../../models/user');

const authenticate = require('../../middlewares/authenticate');

chai.use(sinonChai);

describe('#authenticate()', () => {

  beforeEach(() => {
    User.tokens.push('12345');
  });

  afterEach(() => {
    User.tokens.pop();
  });

  it('should call next when tokens is present in headers', () => {

    const req = {
      headers: {
        authorization: '12345',
      },
    };

    const next = sinon.spy();
    authenticate(req, null, next);
    expect(next).to.have.been.calledOnce;
    expect(next).to.have.been.calledWithExactly();
  });



});
