import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {



  baseUrl = environment.apiURL;
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService) { }
  
  uploadFile  (files: any)  {
    const id = this.localStorageService.getProperty('id');
    const url = `${this.baseUrl}/api/uploadfile/${id}`;
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
   return this.http.post(url, formData, {reportProgress: true, observe: 'events'})
      
  }
}
