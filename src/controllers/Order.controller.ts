import { Request, Response } from 'express';
import OrderService from '../services/Order.service';

export default class OrderController {
  orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  getOrders = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getOrders();
    res.status(200).json(orders);
  };
}