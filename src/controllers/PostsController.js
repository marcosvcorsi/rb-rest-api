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

    await this.postsService.update(id, { title, content });

    return response.status(204).send();
  }

  async deletePost(request, response) {
    const { id } = request.params;

    await this.postsService.delete(id);
  
    return response.status(204).send();
  }
}

export default PostsController;