import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = "";
  isDisabled = true;

  onUpdateInput(event: Event) {
    if ((<HTMLInputElement>event.target).value) {
      this.isDisabled = false;
    } else {
      this.isDisabled = !this.isDisabled;
    }
  }

  resetInputValue() {
    this.username = "";
  }
}

