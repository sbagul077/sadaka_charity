import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';
import { DonaterDbService } from './../donater-db.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private myTitle: Title) {
    myTitle.setTitle('Contact | Charity / Non-profit');
  }

  ngOnInit() {}
}
