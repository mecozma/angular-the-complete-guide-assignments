import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isTrue = true;
  clickCounter = 0;
  clickArray=[];

  toggleParagraph() {
    this.isTrue = !this.isTrue;
    this.clickCounter++;
    this.clickArray.push(this.clickCounter);
    console.log(this.clickArray);
  }

}

