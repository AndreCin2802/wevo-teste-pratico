import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'

import { UserController } from './../controller/UserController'

const userRouter = Router()

const userController = new UserController()

userRouter.get('/', userController.getAll)
userRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() },
  }),
  userController.get
)
userRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      telefone: Joi.string().required(),
      cpf: Joi.string().min(11).max(14).required(),
      data_nascimento: Joi.date().required(),
      sexo: Joi.string()
        .regex(/^(Masculino|Feminino)$/)
        .required(),
    },
  }),
  userController.create
)
userRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() },
  }),
  userController.delete
)
userRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().min(3).optional(),
      email: Joi.string().email().optional(),
      telefone: Joi.string().optional(),
      cpf: Joi.string().min(11).max(14).optional(),
      data_nascimento: Joi.date().optional(),
      sexo: Joi.string()
        .regex(/^(Masculino|Feminino)$/)
        .optional(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  userController.update
)

export default userRouter
