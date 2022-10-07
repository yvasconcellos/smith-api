import { CreateOrder } from '../interfaces/Interfaces';
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

  async createOrders(dataOrder: CreateOrder, userId: number) {
    const order = await this.orderModel.createOrder(dataOrder, userId);
    // const order = await this.orderModel.getOrderById(orderId);
    return order;
  }
}