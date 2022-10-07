import jwt from 'jsonwebtoken';
import { Login, User } from '../interfaces/Interfaces';
import connection from '../models/connection';
import UserModel from '../models/User.model';

const secret = process.env.JWT_SECRET || 'secret';

export default class UserService {
  userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }
  
  async createUser(dataUser: User) {
    const userId = await this.userModel.createUser(dataUser);
    const user = await this.userModel.getUserById(userId);
    const token = this.generateToken(user[0]);
    return { token };
  }

  async getUserByNameAndPassword(dataLogin: Login) {
    const user = await this.userModel.getUserByNameAndPassword(dataLogin);
    if (user.length === 0) {
      return null;
    }
    const token = this.generateToken(user[0]);
    return { token };
  }

  generateToken = (dataUser: User): string => {
    const payload = { id: dataUser.id, name: dataUser.username };
    const token = jwt.sign({ data: payload }, secret);
    return token;
  };
}