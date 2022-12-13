import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RolesModel} from '../models/roles.model';
import {UserModel} from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(private _httpClient: HttpClient) {
  }

  getRoles(): Observable<RolesModel[]> {
    return this._httpClient.get<RolesModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/roles');
  }

  registerUser(user: Omit<UserModel, 'id'>): Observable<UserModel> {
    return this._httpClient.post<UserModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/user', user);
  }
}
