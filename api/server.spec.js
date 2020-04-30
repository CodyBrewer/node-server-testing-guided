const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
  describe('GET "/"', () => {
    it('returns 200 OK', async function() {
      const response = await request(server).get('/');

      expect(response.status).toBe(200);
    });
    it('returns JSON', async function () {
      const response = await request(server).get('/');

      expect(response.type).toMatch(/json/i);
    });
    it('returns { api: "up" }', async function() {
      const response = await request(server).get('/');

      expect(response.body.api).toBe('up');
    });
  });
});
