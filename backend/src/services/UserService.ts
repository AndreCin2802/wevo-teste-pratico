import { User } from '../typeorm/entities/User'

enum Sexo {
  Masculino,
  Feminino,
}

interface IUserRequest {
  name: string
  email: string
  cpf: string
  telefone: string
  data_nascimento: string
  sexo: string
}
interface UserService {
  getById(userId: string): Promise<User>
  save(user: IUserRequest): Promise<User>
  delete(id: string): Promise<void>
  update(id: string, user: IUserRequest): Promise<User>
  list(): Promise<User[]>
}

export { IUserRequest, Sexo, UserService }
