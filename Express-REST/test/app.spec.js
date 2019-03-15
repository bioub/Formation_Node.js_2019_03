'use strict';

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiHttp = require('chai-http');

const Contact = require('../models/contact');

const app = require('../app');

chai.use(sinonChai);
chai.use(chaiHttp);

describe('GET /api/contacts', () => {

  it('should return status 200 and contacts', async () => {
    const contacts = [{ prenom: 'A' }, { prenom: 'B' }];

    const mock = sinon.mock(Contact);

    mock.expects('find')
      .once()
      .withExactArgs()
      .resolves(contacts);

    const res = await chai.request(app)
      .get('/api/contacts');

    expect(res).to.have.status(200);
    expect(res.body).to.deep.equal(contacts);

    mock.verify();
  });



});
