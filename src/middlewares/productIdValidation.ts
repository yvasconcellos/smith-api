import { NextFunction, Request, Response } from 'express';
import { productIdSchema } from './schema';

const productIdValidation = (req: Request, res: Response, next: NextFunction) => {
  const validation = productIdSchema.validate(req.body);
  
  if (validation.error) {
    let codeStatus = 0;
    if (validation.error.details[0].type === 'any.required') {
      codeStatus = 400;
    } else {
      codeStatus = 422;
    }
    return res
      .status(codeStatus)
      .json({ message: validation.error.details[0].message });
  }
  next();
};

export default productIdValidation;