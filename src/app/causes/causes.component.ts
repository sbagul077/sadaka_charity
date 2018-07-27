import { Title } from '@angular/platform-browser';
import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.css']
})
export class CausesComponent implements OnInit {
  constructor(private myTitle: Title) {
    myTitle.setTitle('Causes | Charity /Non-profit');
  }

  ngOnInit() {}
}
