import { Request, Response } from 'express';
import OrderService from '../services/Order.service';

export default class OrderController {
  orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  getOrders = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getOrders();
    return res.status(200).json(orders);
  };

  createOrder = async (req: Request, res: Response) => {
    const { body } = req;
    const order = await this.orderService.createOrders(body, body.token.data.id);
    return res.status(201).json(order);
  };
}