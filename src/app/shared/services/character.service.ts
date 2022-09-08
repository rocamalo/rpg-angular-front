import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CharacterResponse } from './responses-interfaces/character-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl: string = `${environment.apiURL}/api/character`;

  constructor(private http: HttpClient) { }

  // private headers = { //HEADERS TO AVOID THE INTERCEPTOR, IT'S STILL SECURE BECAUSE THE BACKEND IS THE ONE MANAGING THE PRIVILEGES
  //   headers:{Authorization: `bearer ${localStorage.getItem('token')}`} //TODO MOVE THIS TO INTERCEPTOR AND USER LOCALSTORAGE SERVICE
  // }

  getAll(): Observable<CharacterResponse> {
    const url = `${this.baseUrl}/getall`
    return this.http.get<CharacterResponse>(url).pipe(
      catchError( err => { 
        console.warn(err);
        return of(err.error.message);
      })
    )
  }
}
