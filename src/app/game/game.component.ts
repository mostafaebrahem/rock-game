import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  gameData:string[]=[];
  // random!:number;
  constructor(private _Data:DataService) { }

  ngOnInit(): void {
    this._Data.getGameData().subscribe((data)=>{
      this.gameData=data;
      console.log(this.gameData)
    })
  }
  genetateRandom()
{
  this._Data.genetateRandom()
  // this.random=this._Data.randomValue;
}
}
