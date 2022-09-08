import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  

  loginForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe( response => {
       if(typeof response == "boolean") {
        console.log("succesfully logged in")
        this.showSuccess();
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1500);
        
       } else {
        this.showError(response)
       }
    })
  }


  showError(msg: string) {
    this.messageService.add({severity:'error', summary: 'Error', detail: msg});
}

showSuccess() {
  this.messageService.add({severity:'success', summary: 'Success', detail: 'Succesfully logged in'});
}


}
