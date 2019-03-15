'use strict';

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const Contact = require('../../models/contact');

const contactCtrl = require('../../controllers/contact');

chai.use(sinonChai);

describe('#contactCtrl.list()', () => {

  it('should call json with return from Contact.find', async () => {

    const res = {
      json: sinon.spy(),
    };

    const contacts = [{ prenom: 'A' }, { prenom: 'B' }];

    const mock = sinon.mock(Contact);

    mock.expects('find')
      .once()
      .withExactArgs()
      .resolves(contacts);

    await contactCtrl.list(null, res, null);
    expect(res.json).to.have.been.calledOnce;
    expect(res.json).to.have.been.calledWithExactly(contacts);

    mock.verify();
  });



});
