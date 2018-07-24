import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {CarousalComponent} from './carousal/carousal.component';
import {FooterComponent} from './footer/footer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
    HomeComponent,
    HeaderComponent,
    CarousalComponent,
    FooterComponent
  ],
})
export class AppComponent {
  title = 'app';
}
