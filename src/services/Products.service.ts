import Products from '../interfaces/Interfaces';
import connection from '../models/connection';
import ProductModel from '../models/Products.model';

export default class ProductService {
  productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }
  
  async createProduct(dataProduct: Omit<Products, 'id'>) {
    const product = await this.productModel.createProduct(dataProduct);
    return product;
  }
}