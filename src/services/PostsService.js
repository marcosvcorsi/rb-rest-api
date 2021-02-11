class PostsService {
  constructor({ postsRepository }) {
    this.postsRepository = postsRepository;
  }

  async findAll() {
    return this.postsRepository.findAll();
  }
}

export default PostsService;