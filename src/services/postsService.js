import { getPosts } from "../data/postsData.js"

const findAll = () => {
  return getPosts();
}

export {
  findAll
}