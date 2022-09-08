import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';
import { matchingFields } from 'src/app/shared/utils/customValidator';
import { RegisterResponse } from '../../../../core/interfaces/register-response.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
    ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validators: matchingFields('password', 'password2')
    })
   }

  ngOnInit(): void {
  }

  register() {
    if (!this.registerForm.valid) {
      return;
    }
    const { username, password } = this.registerForm.value;
    this.authService.register(username, password).subscribe( response => {
      if( response.success ) {
       console.log("succesfully registered");
       this.showSuccess(response.message);
      } else {
       this.showError(response)
      }
   })
  }

  showError(msg: string) {
    this.messageService.add({severity:'error', summary: 'Error', detail: msg});
}

showSuccess(msg: string) {
  this.messageService.add({severity:'success', summary: 'Success', detail: msg});
}

}
