class PostsService {
  constructor({ postsRepository }) {
    this.postsRepository = postsRepository;
  }

  async findAll() {
    return this.postsRepository.findAll();
  }

  async findById(id) {
    return this.postsRepository.findById(id);
  }

  async create({ title, content }) {
    return this.postsRepository.create({ title, content })
  }

  async update(id, { title, content }) {
    return this.postsRepository.update(id, { title, content });
  }

  async delete(id) {
    return this.postsRepository.delete(id);
  }
}

export default PostsService;