import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate-form',
  templateUrl: './donate-form.component.html',
  styleUrls: ['./donate-form.component.css']
})
export class DonateFormComponent implements OnInit {
  title = 'Donate Now';
  firstName = '';
  lastName = '';

  constructor() { }

  onInputChange(event: any){
    // console.log(event.target.name);
  switch (event.target.name) {
    case 'firstName':
      this.firstName = event.target.value;
      break;
    case 'lastName':
      this.lastName = event.target.value;
      break;
    default:
      break;
  }

  }

  onButtonClick(event:any){
    console.log(event);
    alert(`Name is ${this.firstName} ${this.lastName}`);
  }

  ngOnInit() {
  }

}
