import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { environment } from '../../../environments/environment';
import { UserResponse } from './responses-interfaces/UserResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.apiURL;
  private imgPathSubject = new BehaviorSubject<string>(`${environment.apiURL}/${this.localStorageService.getProperty('imgpath')}`);
  public imgPath$ = this.imgPathSubject.asObservable();
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService) {  
    }

  getUserInformation() {
    const id = this.localStorageService.getProperty('id');
    const url = `${this.apiUrl}/api/user/${id}`
    return this.http.get<UserResponse>(url).pipe(
      tap(response => this.localStorageService.setPropertyToLocalStorage('imgpath', response.data.profilePicturePath))
    )
  }


  setImagePath(path: string) {
    this.imgPathSubject.next(`${environment.apiURL}/${path}`);
  }
  
}
