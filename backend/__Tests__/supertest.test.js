import server from '../server.js'
import supertest from 'supertest'

const requestWithSupertest = supertest(server)


describe('User Endpoints', () => {

  it('GET /user should show all users', async () => {
    const res = await requestWithSupertest.get('/api');
      expect(res.status).toEqual(200);
    //   expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('users')
  });

});