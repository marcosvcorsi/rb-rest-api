class PostsRepository {
  constructor({ db }) {
    this.db = db;
  }

  async findAll() {
    return this.db.query('select * from blog.post');
  }

  async findById(id) {
    return this.db.one('select * from blog.post where id = $1', [id]);
  }

  async create({ title, content }) {
    return this.db.one('insert into blog.post (title, content) values ($1, $2) returning *', [title, content]);
  }

  async update(id, { title, content }) {
    return this.db.none('update blog.post set title = $1, content = $2 where id = $3', [title, content, id]);
  }

  async delete(id) {
    return this.db.none('delete from blog.post where id = $1', [id]);
  }
}

export default PostsRepository;