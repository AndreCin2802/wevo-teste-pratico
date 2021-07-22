import { IUserRequest } from '../services/UserService'
import { User } from './../typeorm/entities/User'
export interface UserRepository {
  findAllUsers(): Promise<User[]>
  findByUserId(id: string): Promise<User | undefined>
  saveUser(user: IUserRequest): Promise<User>
  deleteUser(id: string): Promise<void>
  updateUser(user: IUserRequest): Promise<User>
}
