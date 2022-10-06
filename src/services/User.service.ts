import jwt from 'jsonwebtoken';
import { User } from '../interfaces/Interfaces';
import connection from '../models/connection';
import UserModel from '../models/User.model';

const secret = process.env.JWT_SECRET || 'secret';

export default class UserService {
  userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }
  
  async createUser(dataUser: User) {
    const user = await this.userModel.createUser(dataUser);
    const token = this.generateToken(user);
    return { token };
  }

  generateToken = (dataUser: User): string => {
    const payload = { id: dataUser.username, name: dataUser.id };
    const token = jwt.sign(payload, secret);
    return token;
  };
}