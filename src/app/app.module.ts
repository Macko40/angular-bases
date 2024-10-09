import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CounterModule } from './counter/counter.module';
<<<<<<< HEAD
=======
import { DbzModule } from './dbz/dbz.module';
>>>>>>> 70abbe9 (Repasando seccion 4)
import { HeroesModule } from './heroes/heroes.module';


import { AppComponent } from './app.component';


<<<<<<< HEAD
=======


>>>>>>> 70abbe9 (Repasando seccion 4)
@NgModule({
  declarations: [
    AppComponent,

<<<<<<< HEAD
=======

>>>>>>> 70abbe9 (Repasando seccion 4)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
<<<<<<< HEAD
    HeroesModule
=======
    HeroesModule,
    DbzModule
>>>>>>> 70abbe9 (Repasando seccion 4)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
