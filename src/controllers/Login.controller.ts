import { Request, Response } from 'express';
import UserService from '../services/User.service';

export default class LoginController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  login = async (req: Request, res: Response) => {
    const { body } = req;
    const user = await this.userService.getUserByNameAndPassword(body);
    if (!user) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    return res.status(200).json(user);
  };
}