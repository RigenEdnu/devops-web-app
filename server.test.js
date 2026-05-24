const request = require('supertest');
const app = require('./server.js');

describe('Test API Endpoints', () => {
  test('GET /health harus mengembalikan status OK', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
  });

  test('POST /api/login dengan data valid harus berhasil', async () => {
    const response = await request(app)
      .post('/api/login')
      .send({ username: 'testuser', password: 'testpass' });
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  test('GET /api/users harus mengembalikan daftar user', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body.users.length).toBeGreaterThan(0);
  });
});
