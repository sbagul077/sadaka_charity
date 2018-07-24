import { DonateFormComponent } from './../donate-form/donate-form.component';
import { DonateButtonComponent } from './../donate-button/donate-button.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css'],
  providers: [DonateButtonComponent,DonateFormComponent]
})
export class CarousalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
