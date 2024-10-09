import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',

  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']

})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'ABC',
    power: 0
  };

  emitCharacter():void{
    // debugger;
    console.log(this.character);
    if(this.character.name.length === 0) return;// evitando que el campo nombre este vacio

    this.onNewCharacter.emit(this.character);// aqui emitimos algo de tipo personaje

   // Se puede hacer asi para que cuando se emitan los atributos regresen a vacio y O
    // this.character.name = '';
    // this.character.power = 0;

// De esta manera se ahora una linea de codigo
this.character = {name: '' , power: 0};

  }

}
