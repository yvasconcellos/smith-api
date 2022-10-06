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

const userSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.empty': '"username" is required',
    'string.min': '"username" length must be at least 3 characters long',
  }),
  classe: Joi.string().min(3).required().messages({
    'string.empty': '"classe" is required',
    'string.min': '"classe" length must be at least 3 characters long',
  }),
  level: Joi.number().min(1).required().messages({
    'number.empty': '"level" is required',
    'number.min': '"level" must be greater than or equal to 1',
  }),
  password: Joi.string().min(8).required().messages({
    'string.empty': '"password" is required',
    'string.min': '"password" length must be at least 8 characters long',
  }),
});

export { loginSchema, productSchema, userSchema };