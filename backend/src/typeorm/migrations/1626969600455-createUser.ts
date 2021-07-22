import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createUser1626969600455 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },

          {
            name: 'name',
            type: 'varchar',
          },

          {
            name: 'cpf',
            type: 'varchar',
          },

          {
            name: 'email',
            type: 'varchar',
          },

          {
            name: 'telefone',
            type: 'varchar',
          },

          {
            name: 'sexo',
            type: "enum('Masculino','Feminino')",
          },

          {
            name: 'data_nascimento',
            type: 'date',
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
