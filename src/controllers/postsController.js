import { createPostsService } from '../factories/posts.js';

const postsService = createPostsService();

const findAllPosts = async (req, res) => {
  const posts = await postsService.findAll();

  return res.json(posts);
};

const findPostById = (req, res) => {
  res.json({});
};

const createPost = async (req, res) => {
  const { title, content } = req.body;

  const post = await postsService.create({
    title,
    content
  })

  return res.status(201).json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  await postsService.update(id, { title, content });

  return res.status(204).send();
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  await postsService.delete(id);

  return res.status(204).send();
};

export {
  findAllPosts,
  findPostById,
  createPost,
  updatePost,
  deletePost
}