import { UserService } from './services/user.service';
import { IUserRequest, IUserResponse } from 'src/interfaces/User';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
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
