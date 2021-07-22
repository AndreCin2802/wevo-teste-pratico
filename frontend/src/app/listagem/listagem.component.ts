import { Component, OnInit } from '@angular/core';
import { IUserResponse } from 'src/interfaces/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent implements OnInit {
  users: IUserResponse[] = [];

  displayedColumns: string[] = [
    'position',
    'Nome',
    'Cpf',
    'Email',
    'Telefone',
    'Sexo',
    'Data de Nascimento',
  ];

  constructor(private userService: UserService) {
    this.userService.userEvent.subscribe(() => {
      this.getAllUsers();
    });
  }

  getAllUsers() {
    this.userService
      .todos()
      .subscribe(
        (users) => (console.log('novos usuarios', users), (this.users = users))
      );
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  deletarUser(id: string): void {
    this.userService.deletar(id);
    this.getAllUsers();
  }
}
