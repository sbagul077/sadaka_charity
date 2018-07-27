import { ContactComponent } from './contact/contact.component';
import { CausesComponent } from './causes/causes.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // abc.com/
  { path: 'home', component: HomeComponent }, // abc.com/home
  { path: 'about', component: AboutComponent },
  { path: 'causes', component: CausesComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule {}
