import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dado1:string = '../assets/img/dice1.png'
  dado2:string = '../assets/img/dice2.png'

  setDiceNumb():number {
    const number = Math.floor(Math.random() * 6) + 1
    return number
  }

  changeDices():void {
    this.dado1 = `../assets/img/dice${this.setDiceNumb()}.png`
    this.dado2 = `../assets/img/dice${this.setDiceNumb()}.png`
  }

  checkEqualDices():boolean {
    if (this.dado1 === this.dado2) {
      return true
    } else {
      return false
    }
  }
}

