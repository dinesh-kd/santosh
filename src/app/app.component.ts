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

  mapStatus = true;

  toggleMap(data) {
    console.log(data)
    this.mapStatus = false;
  }
}
