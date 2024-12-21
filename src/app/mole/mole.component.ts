import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-mole',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './mole.component.html',
  styleUrl: './mole.component.scss'
})
export class MoleComponent {
  isVisible:boolean = false;
  score:number = 0;
  timer:number = 30;
  interval:number = 1000;
  gameDuration:number = 30;
  gameTimer:number = 0;
  timeLeft:number = this.gameDuration;
  molePosition: {top: string, left: string} = {top: '0px', left: '0px'};
  characterType: string = '';

  toggleCharacterVisibility() {
    this.isVisible = !this.isVisible;

    if (this.isVisible) {
      this.randomizeCharacter();
      this.randomizeMolePosition();
    }
  }

  // Randomize which character (mole or worm) appears
  randomizeCharacter() {
    this.characterType = Math.random() < 0.5 ? 'mole' : 'worm'; // 50% chance for mole or worm
  }

  randomizeMolePosition() {
    const maxWidth = 80;
    const maxHeight = 80;

    const randomLeft = Math.floor(Math.random() * maxWidth) + '%';
    const randomTop = Math.floor(Math.random() * maxHeight) + '%';

    this.molePosition = { left: randomLeft, top: randomTop };
  }

  startGame() {
    console.log('Game started');

    this.gameTimer = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.stopGame();
      }
    }, 1000);

    this.timer = setInterval(() => {
      this.interval = Math.floor(Math.random() * (2000 - 500 + 1)) + 500;
      console.log('this.interval', this.interval);
      this.toggleCharacterVisibility();
    }, this.interval);
  }

  stopGame() {
    clearInterval(this.timer);
    clearInterval(this.gameTimer);
    this.isVisible = false;
  }

  hitCharacter() {
    if (this.isVisible) {
      if (this.characterType === 'mole') {
        this.score++;  // Increase score for mole
      } else if (this.characterType === 'worm') {
        this.score--;  // Decrease score for worm
      }
      this.toggleCharacterVisibility(); // Hide character after hitting
    }
  }

  // Reset the game state
  resetGame() {
    this.score = 0;
    this.timeLeft = this.gameDuration;
    this.stopGame();
  }


}
