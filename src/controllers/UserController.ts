import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';

class UserController {
   userRepository = [{name: "Samuel"}];

  public add = async (
    request: Request,
    response: Response,
    next: NextFunction,
  ) => {
    try {
      const {
        name,
      } : User = request.body;

     
      const newUser = {name: name};

      this.userRepository.push(newUser)

      return response
        .status(200)
        .json(newUser);
    } catch (error) {
      return next(error);
    }
  };


  public getAll = async (
    request: Request,
    response: Response,
    next: NextFunction,
  ) => {
    try {
      const users = this.userRepository
      return response.status(200).json(users);
    } catch (error) {
      return next(error);
    }
  };

}

export default new UserController();