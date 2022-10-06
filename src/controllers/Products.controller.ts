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
    res.status(201).json(product);
  };
}