import NotFoundError from "../errors/NotFoundError";
import AlreadyExistsError from '../errors/AlreadyExistsError';

class PostsService {
  constructor({ postsRepository }) {
    this.postsRepository = postsRepository;
  }

  async findAll() {
    return this.postsRepository.findAll();
  }

  async findById(id) {
    const post = await this.postsRepository.findById(id);

    if(!post) {
      throw new NotFoundError('Post not found');
    }

    return post;
  }

  async create({ title, content }) {
    const postTitleAlreadyExists = await this.postsRepository.findByTitle(title);

    if(postTitleAlreadyExists) {
      throw new AlreadyExistsError('Post with this title already exists');
    }

    return this.postsRepository.create({ title, content })
  }

  async update(id, { title, content }) {
    await this.findById(id);

    return this.postsRepository.update(id, { title, content });
  }

  async delete(id) {
    await this.findById(id);

    return this.postsRepository.delete(id);
  }
}

export default PostsService;