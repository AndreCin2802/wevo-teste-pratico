import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  cpf: string

  @Column()
  email: string

  @Column()
  telefone: string

  @Column()
  sexo: string

  @Column({ type: 'date' })
  data_nascimento: string
}
