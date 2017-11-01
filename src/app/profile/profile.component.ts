import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input('details') profileDetails: string;
  @Input() profileid;
  @Output('hideMap') hideMapIN = new EventEmitter<any>();

  constructor() { }

  buttonClick() {
    this.hideMapIN.emit('click event');
  }

  getProfessionDetails() {
      // code
  }

  ngOnInit() {
    this.getProfessionDetails();
  }

}
