import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CharacterService } from 'src/app/shared/services/character.service';
import { Character } from 'src/app/shared/services/responses-interfaces/character-response.interface';

@Component({
  selector: 'app-listcharacters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit, OnDestroy {

  characters!: Character[];
  sub!: Subscription
  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
   this.sub = this.characterService.getAll().subscribe( response => {
      console.log(response);
      this.characters = response.data;
    });
  }

  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }



}
