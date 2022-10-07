import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { CreateOrder, Order, ResponseOrder } from '../interfaces/Interfaces';

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

  async getOrderById(orderId: number): Promise<Omit<Order, 'id'>> {
    const [result] = await this.connection.execute<(Order & RowDataPacket[])>(`
    SELECT orders.userId, json_arrayagg(products.id) 
    AS productsIds FROM Trybesmith.Orders AS orders
    INNER JOIN Trybesmith.Products AS products
    ON orders.id = products.orderId
    WHERE orders.id = ?
    GROUP BY orders.id`, [orderId]);
    return result;
  }

  async createOrder(dataOrder: CreateOrder, userId: number): Promise<ResponseOrder> {
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>('INSERT INTO Trybesmith.Orders (userId) VALUES (?)', [userId]);
    console.log('dataOrder', dataOrder.productsIds);
    console.log('insertId', insertId);
    
    const result2 = dataOrder.productsIds.map((productId) => this
      .connection.execute<(Order[] & RowDataPacket[])>(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?', [insertId, productId]));
    await Promise.all(result2);
    const response = {
      userId,
      productsIds: dataOrder.productsIds,
    };
    return response;
  }
}