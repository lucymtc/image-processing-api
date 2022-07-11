import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('Gets a redirect from the root endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(302);
  });

  it('Gets status 200 on /api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });

  it('Gets status 400 Bad request when missing required params', async () => {
    const response = await request.get('/api/image');
    expect(response.status).toBe(400);
  });
});
