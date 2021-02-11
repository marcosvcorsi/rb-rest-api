import crypto from 'crypto';
import { create } from 'domain';

import request from 'supertest';
import app from '../src/app.js';

const generate = (size = 20) => {
  return crypto.randomBytes(size).toString('hex');
}

describe('Posts', () => {
  it('should get posts', async () => {
    const response = await request(app).get('/posts');

    expect(response.body).toHaveLength(1);
  })
})