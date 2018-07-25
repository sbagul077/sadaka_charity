import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonaterDbService {
  donaters = [
    {
      firstName: 'Sanket',
      lastName: 'Bagul',
      amount: 500,
      note: 'This is my note',
      email: 'abc@example.com'
    },
    {
      firstName: 'Sanket2',
      lastName: 'Bagul',
      amount: 500,
      note: 'This is my note',
      email: 'abc@example.com'
    },
    {
      firstName: 'Sanket2',
      lastName: 'Bagul',
      amount: 500,
      note: 'This is my note',
      email: 'abc@example.com'
    },
    {
      firstName: 'Sanket2',
      lastName: 'Bagul',
      amount: 500,
      note: 'This is my note',
      email: 'abc@example.com'
    },
    {
      firstName: 'Sanket2',
      lastName: 'Bagul',
      amount: 500,
      note: 'This is my note',
      email: 'abc@example.com'
    },
    {
      firstName: 'Sanket2',
      lastName: 'Bagul',
      amount: 500,
      note: 'This is my note',
      email: 'abc@example.com'
    },
    {
      firstName: 'Sanket2',
      lastName: 'Bagul',
      amount: 500,
      note: 'This is my note',
      email: 'abc@example.com'
    },
    {
      firstName: 'Sanket3',
      lastName: 'Bagul',
      amount: 500,
      note: 'This is my note',
      email: 'abc@example.com'
    }
  ];
  constructor() {
    this.donaters = this.donaters.slice(0, 4);
  }

  getDonaters() {
    console.log('service called');
    return this.donaters;
  }

  addDonater(
    firstName: string,
    lastName: string,
    note: string,
    amount: number,
    email: string
  ) {
    this.donaters.unshift({
      firstName,
      lastName,
      note,
      amount,
      email
    });
    if (this.donaters.length > 4) {
      this.donaters = this.donaters.slice(1, 4);
    }
  }
}
