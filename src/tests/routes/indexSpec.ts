import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Test app endpoint responses', () => {
  it('should redirect from the root endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(302);
  });

  it('should receive status 200 on /api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});
