import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../data.service';

@Component({
  selector: 'app-begins',
  templateUrl: './begins.component.html',
  styleUrls: ['./begins.component.scss']
})
export class BeginsComponent implements OnInit {
  currentItem:any='';
  items:string[]=[];
  random:number=0;
  isWin!:"win"|"draw"|"lose";
  meChoise:boolean=true;
  colors:string[];
  constructor(private route: ActivatedRoute,private _DataService:DataService) {
    this.colors=this._DataService.colors;
    this.route.params.subscribe((params) => {
      // display the extracted data in the console
      this.currentItem=params;
      console.log(this.currentItem.x);
    });
    
    this.random=_DataService.randomValue;
    this.winnerCalc();
   }

  ngOnInit(): void {
    this._DataService.getGameData().subscribe((data)=>{
      this.items=data;
      console.log(this.items)
    })
  }
  // genetateRandom(){
  //   this.random= Math.round(Math.random()*4)
  //   console.log(this.random)
  //   this.meChoise=!this.meChoise
  //   this.winnerCalc()
  // }

  winnerCalc(){
    if(this.currentItem.x==0&&this.random==0||
      this.currentItem.x==1&&this.random==1||
      this.currentItem.x==2&&this.random==2||
      this.currentItem.x==3&&this.random==3||
      this.currentItem.x==4&&this.random==4){
        this.isWin="draw";
      }else if(this.currentItem.x==0&&this.random!=0){
        if([2,3].includes(this.random)){
          this.isWin="win";
          this.winitterator()
        }else{
          this.isWin="lose";
          this.loseItterator()
        }
      }else if(this.currentItem.x==1&&this.random!=1){
        if([4,0].includes(this.random)){
          this.isWin="win";
          this.winitterator()
        }else{
          this.isWin="lose";
          this.loseItterator()
        }
      }else if(this.currentItem.x==2&&this.random!=2){
        if([4,1].includes(this.random)){
          this.isWin="win";
          this.winitterator()
        }else{
          this.isWin="lose";
          this.loseItterator()
        }
      }else if(this.currentItem.x==3&&this.random!=3){
        if([2,1].includes(this.random)){
          this.isWin="win";
          this.winitterator()
        }else{
          this.isWin="lose";
          this.loseItterator()
        }
      }else if(this.currentItem.x==4&&this.random!=4){
        if([3,0].includes(this.random)){
          this.isWin="win";
          this.winitterator()
        }else{
          this.isWin="lose";
          this.loseItterator()
        }
      }
    console.log(this.isWin)
  }
  winitterator(){
    this._DataService.score++
    localStorage.setItem("score",JSON.stringify(this._DataService.score))

  }
  loseItterator(){
    this._DataService.score--;
    localStorage.setItem("score",JSON.stringify(this._DataService.score))

  }
  newGame(){
    this._DataService.score=0;
    localStorage.setItem("score",JSON.stringify(this._DataService.score))

  }
}
