import { DonaterDbService } from './donater-db.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CarousalComponent } from './carousal/carousal.component';
import { FooterComponent } from './footer/footer.component';
import { DonateButtonComponent } from './donate-button/donate-button.component';
import { DonateFormComponent } from './donate-form/donate-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CausesComponent } from './causes/causes.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CarousalComponent,
    FooterComponent,
    DonateButtonComponent,
    DonateFormComponent,
    AboutComponent,
    ContactComponent,
    CausesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [DonaterDbService],
  bootstrap: [AppComponent]
})
export class AppModule {}
