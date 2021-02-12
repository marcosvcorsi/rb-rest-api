import crypto from 'crypto';

import request from 'supertest';
import app from '../src/app.js';
import db from '../src/infra/database';
import { createPostsService } from '../src/factories/posts.js';

const postsService = createPostsService();

const generate = (size = 20) => {
  return crypto.randomBytes(size).toString('hex');
}

describe('Posts', () => {
  beforeEach(async () => {
    await db.none('DELETE FROM blog.post');
  })

  it('should get posts', async () => {
    const post = await postsService.create({ title: generate(), content: generate() })

    const response = await request(app).get('/posts');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0].title).toBe(post.title);
  })

  it('should create new post', async () => {
    const payload = {
      title: generate(),
      content: generate()
    }

    const response = await request(app).post('/posts').send(payload);

    expect(response.statusCode).toBe(201);
    expect(response.body).toBeTruthy();
    expect(response.body.title).toBe(payload.title);
  })

  it('should update a post', async () => {
    const post = await postsService.create({
      title: generate(),
      content: generate()
    });

    const payload = {
      title: generate(),
      content: generate()
    }

    const response = await request(app).put(`/posts/${post.id}`).send(payload);

    const updatedPost = await postsService.findById(post.id);

    expect(response.statusCode).toBe(204);
    expect(updatedPost.title).toBe(payload.title);
    expect(updatedPost.content).toBe(payload.content);
  })

  it('should delete a post', async () => {
    const post = await postsService.create({
      title: generate(),
      content: generate()
    });


    const response = await request(app).delete(`/posts/${post.id}`);

    const currentPosts = await postsService.findAll();

    expect(response.statusCode).toBe(204);
    expect(currentPosts).toHaveLength(0);
  })
})