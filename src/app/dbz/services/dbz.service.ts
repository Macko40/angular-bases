import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';

console.log(uuid());
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 2500
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }

  ];

  public onNewCharacter(character: Character):void {

    const newCharacter: Character = {id: uuid(), ...character};// asi puedo seleccionar todas las propiedades del objeto "character"



    this.characters.push(newCharacter);// con push inserta al final del arreglo
    // this.characters.unshift(character);// con unshift inserta al inicio del arreglo
  }

  public onDeleteCharacter(index:number):void {
    // Elimina el elemento del arreglo en dependencia del index
    //con splice se puede agregar, eliminar o reemplazar un elemento del arreglo
    // en este caso estoy eliminando un elemento dependiendo del index
    this.characters.splice(index,1);
  }

  constructor() { }

}
