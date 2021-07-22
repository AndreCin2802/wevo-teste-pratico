import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { IUserRequest, IUserResponse } from 'src/interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:3003/user';
  public userEvent: EventEmitter<IUserRequest>;
  constructor(private httpClient: HttpClient) {
    this.userEvent = new EventEmitter();
  }

  todos(): Observable<IUserResponse[]> {
    return this.httpClient.get<IUserResponse[]>(this.url);
  }

  cadastrar(user: IUserRequest): Observable<IUserResponse> {
    const result = this.httpClient.post<any>(this.url, user);
    return result;
  }

  deletar(id: String) {
    this.httpClient.delete<void>(`${this.url}/${id}`).subscribe((response) => {
      this.userEvent.emit();
    });
  }
}
