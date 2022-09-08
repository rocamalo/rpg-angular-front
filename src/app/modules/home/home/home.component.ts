import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { UserService } from 'src/app/shared/services/user.service';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  items!: MenuItem[];
 
  constructor( 
    private router: Router,
    private authService: AuthService,
    private userService: UserService
    ) {}

    profileImgPath$ = this.userService.imgPath$;
  ngOnInit() {
    
    this.items = [
      {
        label: 'Characters',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-user-minus',
          },
          {
            label: 'List',
            icon: 'pi pi-fw pi-users',
            routerLink: 'characters'
          },
        ],
      },
      {
        label: 'Fight',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-user-minus',
          },
          {
            label: 'List',
            icon: 'pi pi-fw pi-users',
          },
        ],
      },
      {
        label: 'Weapons',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
          },
        ],
      },
      {
        label: 'Highscores',
        icon: 'pi pi-fw pi-calendar',
      },
    ];
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }
}
