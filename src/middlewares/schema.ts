import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required().messages({
    'string.empty': '"username" is required',
  }),
  password: Joi.string().required().messages({
    'string.empty': '"password" is required',
  }),
});

const productSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.empty': '"name" is required',
    'string.min': '"name" length must be at least 3 characters long',
  }),
  amount: Joi.string().min(3).required().messages({
    'string.empty': '"amount" is required',
    'string.min': '"amount" length must be at least 3 characters long',
  }),
});

export { loginSchema, productSchema };