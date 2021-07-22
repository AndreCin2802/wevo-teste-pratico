import { Request, Response } from 'express'

import { UserService } from '../services/UserService'
import { UserServiceImpl } from './../typeorm/service/UserServiceImpl'

export class UserController {
  async get(req: Request, res: Response) {
    const { id } = req.params
    const userService: UserService = new UserServiceImpl()

    const user = await userService.getById(id)

    return res.json(user)
  }

  async getAll(req: Request, res: Response) {
    const userService = new UserServiceImpl()

    const usersList = await userService.list()

    return res.json(usersList)
  }
  async create(req: Request, res: Response) {
    const { name, cpf, email, telefone, sexo, data_nascimento } = req.body
    const userService = new UserServiceImpl()
    const user = await userService.save({
      name,
      cpf,
      email,
      telefone,
      sexo,
      data_nascimento,
    })

    return res.status(201).json(user)
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params
    const userService = new UserServiceImpl()

    await userService.delete(id)

    return res.status(204).send()
  }

  async update(req: Request, res: Response) {
    const { id } = req.params
    const { name, cpf, email, telefone, sexo, data_nascimento } = req.body
    const userService = new UserServiceImpl()
    const user = await userService.update(id, {
      name,
      cpf,
      email,
      telefone,
      sexo,
      data_nascimento,
    })
    return res.json(user)
  }
}
