import { EntityRepository, Repository } from 'typeorm'

import { IUserRequest } from '../../services/UserService'
import { User } from '../entities/User'
import { UserRepository } from './../../repositories/UserRepository'
@EntityRepository(User)
export class UserRepositoryImpl
  extends Repository<User>
  implements UserRepository {
  async findAllUsers(): Promise<User[]> {
    const users = await this.find()
    return users
  }
  async findByUserId(id: string): Promise<User | undefined> {
    const user = await this.findOne({ where: { id } })
    return user
  }
  async saveUser(user: IUserRequest): Promise<User> {
    const userSaved = await this.save(user)
    return userSaved
  }
  async deleteUser(id: string): Promise<void> {
    await this.delete(id)
  }
  async updateUser(user: IUserRequest): Promise<User> {
    const userUpdated = await this.save(user)
    return userUpdated
  }
}
