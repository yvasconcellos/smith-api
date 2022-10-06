import express from 'express';
import ProductController from './controllers/Products.controller';
import UserController from './controllers/User.controller';

const app = express();
const productController = new ProductController();
const userController = new UserController();

app.use(express.json());
app.post('/products', productController.createProduct);
app.post('/users', userController.createUser);
app.get('/products', productController.getProducts);

export default app;
