import AlreadyExistsError from "../errors/AlreadyExistsError";
import NotFoundError from "../errors/NotFoundError";

export default async (error, request, response, next) => {
  if(error instanceof NotFoundError) {
    return response.status(404).json({ error: error.message });
  }

  if(error instanceof AlreadyExistsError) {
    return response.status(409).json({ error: error.message });
  }

  console.error(error);
  
  return response.status(500).json({ error: 'Internal Server Error'});
}