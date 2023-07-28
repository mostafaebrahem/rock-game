import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  score:number=0;
  randomValue!:number;
  data:Observable<string[]>=of([
    "../../assets/images/icon-scissors.svg",
    "../../assets/images/icon-spock.svg",
    "../../assets/images/icon-paper.svg",
    "../../assets/images/icon-lizard.svg",
    "../../assets/images/icon-rock.svg",
  ])
  colors:string[]=[
    "bg-scissors",
    "bg-spock",
    "bg-paper",
    "bg-lizard",
    "bg-rock"
  ]
  constructor() {
    if("score" in localStorage){
      this.score=Number(localStorage.getItem("score"))
    }else{
      this.score=0
    }
  }
  getGameData():Observable<string[]>{
    return this.data;
  }
  genetateRandom(){
    this.randomValue= Math.round(Math.random()*4)

  }
}
