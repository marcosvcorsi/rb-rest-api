import request from 'supertest';
import app from '../src/app.js';

describe('Posts', () => {
  it('should get posts', async () => {
    const response = await request(app).get('/posts');

    expect(response.body).toBeTruthy();
  })
})