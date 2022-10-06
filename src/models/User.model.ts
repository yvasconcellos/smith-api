import { Pool, RowDataPacket } from 'mysql2/promise';
import { User } from '../interfaces/Interfaces';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createUser({ username, classe, level, password }: User): Promise<User> {
    const [result] = await this.connection.execute<(User & RowDataPacket[])>(`
      INSERT INTO Trybesmith.Users (username, classe, level, password)
     VALUES (?, ?, ?, ?)`, [username, classe, level, password]);
    return result;
  }
}