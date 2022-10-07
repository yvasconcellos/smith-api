import express from 'express';
import ProductController from './controllers/Products.controller';
import UserController from './controllers/User.controller';
import OrderController from './controllers/Order.controller';
import LoginController from './controllers/Login.controller';
import loginValidation from './middlewares/loginValidation';
import productValidation from './middlewares/productValidation';
import userValidation from './middlewares/userValidation';
import validateToken from './auth/validateJWT';
import productIdValidation from './middlewares/productIdValidation';

const app = express();
const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();
const loginController = new LoginController();

app.use(express.json());
app.post('/products', productValidation, productController.createProduct);
app.post('/users', userValidation, userController.createUser);
app.post('/login', loginValidation, loginController.login);
app.get('/products', productController.getProducts);
app.get('/orders', orderController.getOrders);
app.post('/orders', validateToken, productIdValidation, orderController.createOrder);

export default app;
