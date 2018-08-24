import app from "./../app";
import chai from 'chai';
import should from 'should';
import supertest from 'supertest';

// const app = require('./../app');
chai.should();


const request = supertest(app);

describe('Get all user request', () => {
  it('respond with json', (done) => {
    request.get('api/v1/workers')
      .end((err, res) => {

        res.should.have(200);
        res.body.should.be('Database for all LOC workersssss');
        if (err) { done(err) };
        done();
      })
  });
});

