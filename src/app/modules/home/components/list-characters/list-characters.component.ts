import { CharacterService } from '../../../../core/services/characters/character.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit {

  public characters: any;

  constructor(
    private readonly characterService: CharacterService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService
      .getCharacters()
      .subscribe(res => {
        this.characters = res.data.results;
        console.log(res)
      }, (error => {
        console.log(error);
      }))
  }

  navigateByDetail(id: string) {
    return this.router.navigateByUrl(`details/${id}`)
  }

}
