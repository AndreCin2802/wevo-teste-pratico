import { getCustomRepository } from 'typeorm'

import AppError from '../../errors/AppError'
import { UserRepository } from '../../repositories/UserRepository'
import { UserService } from '../../services/UserService'
import { User } from '../entities/User'
import { IUserRequest } from './../../services/UserService'
import { UserRepositoryImpl } from './../repositories/UserRepositoryImpl'

export class UserServiceImpl implements UserService {
  userRepository: UserRepository = getCustomRepository(UserRepositoryImpl)
  async getById(userId: string): Promise<User> {
    const user = await this.userRepository.findByUserId(userId)
    console.log('user', user)
    if (!user) throw new AppError('Usuário não existe.', 404)

    return user
  }
  async save({
    name,
    cpf,
    email,
    telefone,
    sexo,
    data_nascimento,
  }: IUserRequest): Promise<User> {
    const users = await this.userRepository.saveUser({
      name,
      cpf,
      email,
      telefone,
      sexo,
      data_nascimento,
    })
    return users
  }
  async delete(id: string): Promise<void> {
    const user = await this.userRepository.findByUserId(id)

    if (!user) throw new AppError('Usuário não existe.', 404)
    await this.userRepository.deleteUser(id)
  }
  async update(
    id: string,
    { name, cpf, email, telefone, sexo, data_nascimento }: IUserRequest
  ): Promise<User> {
    const userFound = await this.userRepository.findByUserId(id)

    if (!userFound) throw new AppError('Usuário não existe.', 404)
    userFound.name = name || userFound.name
    userFound.cpf = cpf || userFound.cpf
    userFound.email = email || userFound.email
    userFound.data_nascimento = data_nascimento || userFound.data_nascimento
    userFound.sexo = sexo || userFound.sexo
    userFound.telefone = telefone || userFound.telefone

    return await this.userRepository.updateUser(userFound)
  }
  async list(): Promise<User[]> {
    const users = await this.userRepository.findAllUsers()
    return users
  }
}
