import test from './../app';
import chai from 'chai';
import supertest from 'supertest';


const request = supertest(test);

describe('Get all user request', () => {
  it('respond with json', () => {
    request.get('api/v1/workers')
      .end((err, res) => {

        res.should.have(200);
        res.body.should.be('Database for all LOC workersssss');
        if (err) { done(err) };
        done();
      })
  });
});

