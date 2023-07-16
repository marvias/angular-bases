import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public addCharacter(character: Character): void {

    const id: string = character.name.slice(0,1) + character.power.toString();

    const newCharacter: Character = {
      id: id,
      ...character
    };
    this.characters.push(newCharacter);
  }

  public deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

  public characters: Character[] = [{
    id: 'K1000',
    name: 'Krillin',
    power: 1000
  }, {
    id: 'G9500',
    name: 'Goku',
    power: 9500
  }, {
    id: 'V7500',
    name: 'Vegeta',
    power: 7500
  }];
}
