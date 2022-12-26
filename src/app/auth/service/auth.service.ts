import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { RegisterRequestInterface } from '../types/registerRequest.interface'
import { environment } from 'src/environments/environment'
import { AuthResponseInterface } from '../types/authRespone.interface'
import { LoginRequestInterface } from '../types/loginRequest.interface'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface) {
    return response.user
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiURL + '/users'
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiURL + '/users/login'
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
    // .pipe(map((response: AuthResponseInterface) => response.user))
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiURL + '/user'
    return this.http.get(url).pipe(map(this.getUser))
  }
}
