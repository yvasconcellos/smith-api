import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Products from '../interfaces/Interfaces';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createProduct({ name, amount }: Omit<Products, 'id'>): Promise<Products> {
    const [result] = await this.connection.execute<(Products & ResultSetHeader)>(`
      INSERT INTO Trybesmith.Products (name, amount)
     VALUES (?, ?)`, [name, amount]);
    
    const [[product]] = await this.connection.execute<Products & RowDataPacket[]>(`
    SELECT id, name, amount FROM Trybesmith.Products WHERE ID = ?`, [result.insertId]);
    return product as Products;
  }

  async getProducts(): Promise<Products[]> {
    const [result] = await this.connection.execute(`
    SELECT * FROM Trybesmith.Products`);
    return result as Products[];
  }
}