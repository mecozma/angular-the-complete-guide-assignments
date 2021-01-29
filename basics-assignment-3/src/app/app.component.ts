import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isTrue = true;
  clickArray = [];

  toggleParagraph() {
    this.isTrue = !this.isTrue;
    this.clickArray.push(new Date);
  }

}

