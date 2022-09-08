import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";
import { CardModule, } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import {TabViewModule} from 'primeng/tabview';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    PasswordModule,
    DividerModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    MenubarModule,
    ProgressSpinnerModule,
    TagModule,
    TabViewModule,
    AvatarModule,
    AvatarGroupModule
  ]
})
export class PrimengModule { }
