import express from 'express';
import ProductController from './controllers/Products.controller';
import UserController from './controllers/User.controller';
import OrderController from './controllers/Order.controller';

const app = express();
const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();

app.use(express.json());
app.post('/products', productController.createProduct);
app.post('/users', userController.createUser);
app.get('/products', productController.getProducts);
app.get('/orders', orderController.getOrders);

export default app;
