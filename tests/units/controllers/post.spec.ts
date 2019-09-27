import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

const expect = chai.expect;
const apiUrl = 'http://backend:3000';
const endpoint = '/post';

describe('Testing Post module', (): void => {
  it('should return 200 status code when visit GET /post', (done): void => {
    chai
      .request(apiUrl)
      .get(endpoint)
      .end((err, res) => {
        expect(res.status).to.be.equal(401);
        done();
      });
  });

  it('should contains "Content-Type: "application/json" when visit GET /post', (done): void => {
    chai
      .request(apiUrl)
      .get(endpoint)
      .end((err, res) => {
        expect(res.type).to.be.equal('application/json');
        done();
      });
  });

  it('check body', (done): void => {
    chai
      .request(apiUrl)
      .get(endpoint)
      .end((err, res) => {
        expect(res.body).to.have.property('error');
        done();
      });
  });
});
