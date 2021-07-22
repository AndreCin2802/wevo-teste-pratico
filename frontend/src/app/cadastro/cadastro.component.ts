import { UserService } from './../services/user.service';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  constructor(private userService: UserService, private router: Router) {}

  name: string;
  cpf: string;
  email: string;
  telefone: string;
  sexo: string;
  data_nascimento: string;

  cadastrar() {
    console.log(
      this.name,
      this.cpf,
      this.email,
      this.telefone,
      this.sexo,
      this.data_nascimento.split('/').reverse().join('/')
    );
    this.userService
      .cadastrar({
        name: this.name,
        cpf: this.cpf,
        email: this.email,
        telefone: this.telefone,
        sexo: this.sexo,
        data_nascimento: this.data_nascimento,
      })
      .subscribe(() => {
        this.userService.userEvent.emit();
      });

    this.router.navigate(['/']);
  }
}
