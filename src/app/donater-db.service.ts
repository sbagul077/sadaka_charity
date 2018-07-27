import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonaterDbService {
  donaters: Observable<any[]>;
  constructor(private myDb: AngularFireDatabase) {
    this.donaters = myDb.list('donaters').valueChanges();
  }

  getDonaters() {
    console.log('service called');
    return this.donaters;
  }

  async addDonater(
    firstName: string,
    lastName: string,
    note: string,
    amount: number,
    email: string
  ) {
    await this.myDb.list('donaters').push({
      firstName,
      lastName,
      note,
      amount,
      email
    });
  }
}
