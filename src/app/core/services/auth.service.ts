import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/auth-response.interface';
import { catchError, map, of, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { RegisterResponse } from '../interfaces/register-response.interface';
import { UserService } from 'src/app/shared/services/user.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = environment.apiURL;
  

  private headers = { //HEADERS TO AVOID THE INTERCEPTOR, IT'S STILL SECURE BECAUSE THE BACKEND IS THE ONE MANAGING THE PRIVILEGES
    headers:{skip:"true"}
  }

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    ) { }

  login( username: string, password: string) {
    const url = `${this.baseUrl}/auth/login`
    
    const body = { username, password };
    return this.http.post<AuthResponse>(url, body, this.headers).pipe(
      tap( resp => {
        console.log(resp);
        if (resp.success){
          for (let i = 0; i < resp.data.length; i++) {
            this.localStorageService.setPropertyToLocalStorage(resp.data[i].key, resp.data[i].value);
          }
        }
      }),
     map( resp => resp.success ), //extraemos solamente el valor de booleano del backend
      catchError( err => { 
        console.warn(err);
        return of(err.error.message);
      })  //of convierte false a un observable porque asi lo requiere catchError
    )

  }


  register( username: string, password: string, ) {
    const url = `${this.baseUrl}/auth/register`
    const body = { username, password};
    return this.http.post<RegisterResponse>(url, body, this.headers).pipe(
      tap( resp => {
        console.log(resp);
      }),
      catchError( err => of(err.error.message) )
    )
  }


  logout() {
    this.localStorageService.deleteAllPropertiesFromLocalStorage();
  }

  setUserDataToLocalStorage(userInformation: any): void {
    const { token, username }  = userInformation;
    localStorage.setItem('token', token);
    localStorage.setItem('userName', username );
  }

  
}
