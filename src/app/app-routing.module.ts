import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { BeginsComponent } from './begins/begins.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"",redirectTo:"game" ,pathMatch:"full"},
  {path:"game",component:GameComponent},
  {path:"begins/:x",component:BeginsComponent},
  {path:"**",component:GameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
