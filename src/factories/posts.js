import db from '../infra/database.js';

import PostsController from '../controllers/PostsController.js';
import PostsRepository from "../repositories/PostsRepository.js"
import PostsService from "../services/PostsService.js";


export const createPostsService = () => {
  const postsRepository = new PostsRepository({ db });
  const postsService = new PostsService({ postsRepository });

  return postsService;
}

export const createPostsController = () => {
  const postsService = createPostsService();

  const postsController = new PostsController({ postsService });

  return postsController;
}

