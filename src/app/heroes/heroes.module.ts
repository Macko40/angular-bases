import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';



<<<<<<< HEAD
@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
=======

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,

  ],
  exports: [
    HeroComponent,
    ListComponent,

>>>>>>> 70abbe9 (Repasando seccion 4)
  ],
  imports: [
    CommonModule
  ]

})
export class HeroesModule { }
