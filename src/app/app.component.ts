import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputText = '';
  convertedText = '';
  firstWord = '';
  secondWord = '';
  wordPresentOutput = '';
  triangleNumber = 0;
  triangleOutput = '';

  convertLetter() {
    if (this.inputText.trim() === '') {
      this.convertedText = 'Please enter a value.';
      return;
    }

    let newLetter = '';

    for (let i = 0; i < this.inputText.length; i++) {
      const char = this.inputText[i];

      if (/[a-zA-Z]/.test(char)) {
        if (char === 'z') {
          newLetter += 'a';
        } else if (char === 'Z') {
          newLetter += 'A';
        } else {
          newLetter += String.fromCharCode(char.charCodeAt(0) + 1);
        }
      } else {
        newLetter += char;
      }
    }

    this.convertedText = newLetter;
  }

  checkWordPresent() {
    this.wordPresentOutput = this.isAllLettersPresent()
      ? 'True! All letters are present.'
      : 'False! Not all letters are present.';
  }

  isAllLettersPresent(): boolean {
    for (let i = 0; i < this.secondWord.length; i++) {
      if (this.firstWord.indexOf(this.secondWord[i]) === -1) {
        return false;
      }
    }
    return true;
  }

  calculateTriangle() {
    const result = this.triangleNumberSequence(this.triangleNumber);
    this.triangleOutput = `Corresponding number of dots : ${result}`;
  }

  triangleNumberSequence(n: number): number {
    return n * (n + 1) / 2;
  }
}
