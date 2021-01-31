import { findAll } from '../services/postsService.js';

const findAllPosts = async (req, res) => {
  const posts = await findAll();

  res.json(posts);
};

const findPostById = (req, res) => {
  res.json({});
};

const createPost = (req, res) => {
  res.status(201).json({});
};

const updatePost = (req, res) => {
  res.json({})
};

const deletePost = (req, res) => {
  res.status(204).send();
};

export {
  findAllPosts,
  findPostById,
  createPost,
  updatePost,
  deletePost
}