import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { ListCharactersComponent } from './../home/components/list-characters/list-characters.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CharacterService } from './../../core/services/characters/character.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ListCharactersComponent,
    CharacterDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [CharacterService]
})
export class HomeModule { }