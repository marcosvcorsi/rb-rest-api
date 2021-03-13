import NotFoundError from '../errors/NotFoundError.js';

class PostsController {
  constructor({ postsService }) {
    this.postsService = postsService;
  }

  async findAllPosts(request, response) {
    const posts = await this.postsService.findAll();

    return response.json(posts);
  }

  async findPostById(request, response) {
    const { id } = request.params;

    const post = await this.postsService.findById(id);

    if(!post) {
      return response.status(404).json({ error: 'Post not found' });
    }

    return response.json(post);
  }

  async createPost(request, response) {
    const { title, content } = request.body;

    const post = await this.postsService.create({
      title,
      content
    })
  
    return response.status(201).json(post);
  }

  async updatePost(request, response) {
    const { id } = request.params;
    const { title, content } = request.body;
  
    try {
      await this.postsService.update(id, { title, content });
  
      return response.status(204).send();
    } catch(error) {
      if(error instanceof NotFoundError) {
        return response.status(404).json({ error: error.message });
      }

      throw error;
    }
  }

  async deletePost(request, response) {
    const { id } = request.params;

    await this.postsService.delete(id);
  
    return response.status(204).send();
  }
}

export default PostsController;