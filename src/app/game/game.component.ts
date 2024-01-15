import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


enum Player{
  None = "",
  X = "X",
  O = "O"
}
@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  cells: Player[] = new Array(9).fill(Player.None);
  currentPlayer:Player = Player.X;
  winner:Player|null=null;
  gameOver: boolean=false;

  makeMove(index:number):void{
    if(!this.cells[index] && !this.gameOver){
      this.cells[index] = this.currentPlayer;
      this.checkWinner();
      this.currentPlayer=this.currentPlayer===Player.X ? Player.O : Player.X;
    }
  }

  checkWinner():void{
    const winnerPositions:number[][]=[
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    for (const [a,b,c] of winnerPositions){
      if (this.cells[a] != Player.None &&
        this.cells[a] === this.cells[b] && 
        this.cells[a] === this.cells[c]){
          this.winner = this.cells[a];
          this.gameOver = true;
          break;
          
        }
    }
  }
  reset():void{
    this.cells.fill(Player.None);
    this.currentPlayer = Player.X;
    this.winner = null;
    this.gameOver=false;
  }
}


