class PostsRepository {
  constructor({ db }) {
    this.db = db;
  }

  async findAll() {
    return this.db.query('select * from blog.post');
  }
}

export default PostsRepository;