import express from 'express';
import ProductController from './controllers/Products.controller';

const app = express();
const productController = new ProductController();

app.use(express.json());
app.post('/products', productController.createProduct);
app.get('/products', productController.getProducts);

export default app;
