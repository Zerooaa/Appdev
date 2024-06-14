import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostPopupComponent } from './post-popup/post-popup.component';

const routes: Routes = [
  { path: 'landingPage', component: LandingComponent },
  { path: 'aboutPage', component: AboutComponent },
  { path: 'contactPage', component: ContactComponent },
  { path: 'registerPage', component: RegisterComponent },
  { path: 'loginPage', component: LoginComponent },
];

@NgModule({
  declarations: [		
    NavBarComponent,
    LandingComponent,
    AboutComponent,		
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    ContactComponent,
    HomepageComponent,
    PostPopupComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
