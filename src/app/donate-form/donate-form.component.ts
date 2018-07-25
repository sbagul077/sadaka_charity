import { DonaterDbService } from './../donater-db.service';
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
  amount = 0;
  email = '';
  notes = '';

  constructor(private donatersService: DonaterDbService) {}

  onInputChange(event: any) {
    switch (event.target.name) {
      case 'firstName':
        this.firstName = event.target.value;
        break;
      case 'lastName':
        this.lastName = event.target.value;
        break;
      case 'amount':
        this.amount = Number.parseInt(event.target.value, 10);
        break;
      case 'email':
        this.email = event.target.value;
        break;
      case 'note':
        this.notes = event.target.value;
        break;
      default:
        break;
    }
  } // Data sharing between components -- services

  onButtonClick(event: any) {
    console.log(event);
    alert(
      `Name is ${this.firstName} ${this.lastName}
      THank you for donating ${this.amount} and we will
      remember your words
      ${this.notes}`
    );
    this.donatersService.addDonater(
      this.firstName,
      this.lastName,
      this.notes,
      this.amount,
      this.email
    );
  }

  ngOnInit() {}
}
