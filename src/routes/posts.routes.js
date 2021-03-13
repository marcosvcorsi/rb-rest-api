import express from "express";
import { createPostsController } from "../factories/posts";

const postsRoutes = express.Router();

const postsController = createPostsController();

postsRoutes.get('/', postsController.findAllPosts.bind(postsController));

postsRoutes.get('/:id', postsController.findPostById.bind(postsController));

postsRoutes.post('/', postsController.createPost.bind(postsController));

postsRoutes.put('/:id', postsController.updatePost.bind(postsController));

postsRoutes.delete('/:id', postsController.deletePost.bind(postsController));

export default postsRoutes;