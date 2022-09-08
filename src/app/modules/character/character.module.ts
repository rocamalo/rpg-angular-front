import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListCharactersComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule,
    
  ]
})
export class CharacterModule { }
