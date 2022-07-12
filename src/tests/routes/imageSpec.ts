import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Test image endpoints responses', () => {
  it('it should receive status 400 when missing required params', async () => {
    const response = await request.get('/api/image');
    expect(response.status).toBe(400);
  });

  it('it should receive status 404 when missing original image', async () => {
    const response = await request.get(
      '/api/image?filename=randomnametotest&width=500&height=200'
    );
    expect(response.status).toBe(404);
  });
});
