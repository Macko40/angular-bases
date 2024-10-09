import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'iroman';
<<<<<<< HEAD
  public age: number = 45;
=======
  public age:  number = 45;
>>>>>>> 70abbe9 (Repasando seccion 4)



  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{

      return `${this.name} - ${this.age}`;
  }

  changeHero():void{
   this.name = 'Spiderman';
  }

  changeAge():void{
    this.age = 25;
  }

  resetForm():void{
    this.name = 'iroman';
    this.age = 45;
  }



}
