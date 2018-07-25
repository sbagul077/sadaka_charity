import { DonaterDbService } from './../donater-db.service';
import { Title } from '@angular/platform-browser';
import { CarousalComponent } from './../carousal/carousal.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CarousalComponent, DonaterDbService]
})
export class HomeComponent implements OnInit {
  donaters: any;
  constructor(
    private myTitle: Title,
    private donatersService: DonaterDbService
  ) {
    myTitle.setTitle('SADAKA | Charity / Non-profit');
    this.donaters = donatersService.getDonaters();
  }

  ngOnInit() {}
}
