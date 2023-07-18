import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rock-game';

  rules:boolean=false;
  openRules(){
    this.rules=true;
  }
  closeRules(){
    this.rules=false;
  }
}
