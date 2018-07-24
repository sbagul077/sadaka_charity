import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CarousalComponent } from './carousal/carousal.component';
import { FooterComponent } from './footer/footer.component';
import { DonateButtonComponent } from './donate-button/donate-button.component';
import { DonateFormComponent } from './donate-form/donate-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CarousalComponent,
    FooterComponent,
    DonateButtonComponent,
    DonateFormComponent,  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
