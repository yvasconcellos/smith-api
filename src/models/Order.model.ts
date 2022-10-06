import { Pool, RowDataPacket } from 'mysql2/promise';
import { Order } from '../interfaces/Interfaces';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getOrders(): Promise<Order[]> {
    const [result] = await this.connection.execute<(Order[] & RowDataPacket[])>(
      `SELECT orders.id, orders.userId, json_arrayagg(products.id) 
      AS productsIds FROM Trybesmith.Orders AS orders
      INNER JOIN Trybesmith.Products AS products
      ON orders.id = products.orderId
      GROUP BY orders.id`);
    return result as Order[];
  }
}