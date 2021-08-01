import { CharacterService } from '../../../../core/services/characters/character.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  public characterDetails: any;

  constructor(
    private readonly characterService: CharacterService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCharactersDetails(this.route.snapshot.params.id);
  }

  getCharactersDetails(id: string) {
    this.characterService
      .getCharactersDetails(id)
      .subscribe(res => {
        this.characterDetails = res.data.results[0];
        console.log(res)
      }, (error => {
        console.log(error);
      }))
  }

}
