import db from "../infra/database.js"

const getPosts = () => {
  return db.query('select * from blog.post');
}

export {
  getPosts,
}