import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  profile = {
    name: 'Santosh',
    marital_status: 'Married',
    image : 'https://loremflickr.com/320/240'
  };

  imagewidth = 25;
  imageStatus = true;

  hideImage() {
    this.imageStatus = false;
    this.profile.name = 'Dinesh';
  }
}
