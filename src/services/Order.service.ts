import connection from '../models/connection';
import OrderModel from '../models/Order.model';

export default class OrderService {
  orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }
  
  async getOrders() {
    const orders = await this.orderModel.getOrders();
    return orders;
  }
}