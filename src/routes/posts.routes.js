import express from "express";
import { createPost, deletePost, findAllPosts, findPostById, updatePost } from "../controllers/postsController.js";

const postsRoutes = express.Router();

postsRoutes.get('/', findAllPosts);

postsRoutes.get('/:id', findPostById);

postsRoutes.post('/', createPost);

postsRoutes.put('/:id', updatePost);

postsRoutes.delete('/:id', deletePost);

export default postsRoutes;