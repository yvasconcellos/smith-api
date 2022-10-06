import { Pool, RowDataPacket } from 'mysql2/promise';
import { Login, User } from '../interfaces/Interfaces';

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

  async getUserByNameAndPassword({ username, password }: Login): Promise<User[]> {
    const [result] = await this.connection.execute<(
    User[] & RowDataPacket[])>(`
    SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?`, 
      [username, password],
      );
    return result;
  }
}