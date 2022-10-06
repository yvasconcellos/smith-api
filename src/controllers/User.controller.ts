import { Request, Response } from 'express';
import UserService from '../services/User.service';

export default class UserController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  createUser = async (req: Request, res: Response) => {
    const { body } = req;
    const user = await this.userService.createUser(body);
    return res.status(201).json(user);
  };
}