
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { UserResponse } from 'src/app/shared/services/responses-interfaces/UserResponse.interface';
import { UserService } from 'src/app/shared/services/user.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userName!: string;
  
  
  response!: {dbPath: ''};

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private userService: UserService
    ) { 
    }

  ngOnInit(): void {
   this.userName = this.localStorageService.getProperty('username')!; //IGUAL SE PUEDE HACER CON BEHAVIOUR SUBJECT
  }
  profilePicturePath$ = this.userService.imgPath$;

  uploadFinished  (event: any)  { 

    this.response = event; 
    console.log(this.response.dbPath);
    //location.reload(); bad practice
    this.userService.setImagePath(this.response.dbPath); //ya solo falta suscribrse en el componente header!!!
  }
  

 
}
