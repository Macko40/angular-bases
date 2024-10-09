import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from './../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()// Si dentro del parentisis no pongo nada entre comillas toma
  // el nombre por defecto en este caso characterList, sino tomara el nombre
  // escrito en los parentisis
  public characterList: Character[] = [{
    // esta lista se puede dejar vacía, pero se le puso datos para ver, si en la
    // lista que se creó en MainPageComponent no hay nada toma estos valores por defecto
    name: 'Trunks',
    power: 10
  }]

  @Output()// Hay dos formas de hacerlo para emitir un evento de tipo number:
  //forma 1:
  // public onDelete = new EventEmitter<number>();

  //forma 2:
    public onDelete:EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void { //emite el ID del personake

    //TODO: Emitir el ID del personaje

    this.onDelete.emit(index);

    console.log(index);
  }

}
