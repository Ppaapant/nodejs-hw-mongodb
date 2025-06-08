import Joi from 'joi';

export const registerSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  password: Joi.string().min(6)
});

export const loginSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(6)
});
