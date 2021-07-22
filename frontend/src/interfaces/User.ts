export interface IUserRequest {
  name: string;
  cpf: string;
  email: string;
  telefone: string;
  sexo: string;
  data_nascimento: string;
}

export interface IUserResponse extends IUserRequest {
  id: string;
}
