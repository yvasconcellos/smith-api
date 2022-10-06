import { Request, Response } from 'express';
import ProductService from '../services/Products.service';

export default class ProductController {
  productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  createProduct = async (req: Request, res: Response) => {
    const { body } = req;
    const product = await this.productService.createProduct(body);
    return res.status(201).json(product);
  };

  getProducts = async (_req: Request, res: Response) => {
    const product = await this.productService.getProducts();
    return res.status(200).json(product);
  };
}