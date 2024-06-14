import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
import { UserServiceService } from './services/user-service.service';
import { AlertifyService } from './services/alertify.service';
import { PostPopupComponent } from './post-popup/post-popup.component';
import { AuthService } from './services/auth.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', redirectTo: '/landingPage', pathMatch: 'full'},
  { path: 'landingPage', component: LandingComponent },
  { path: 'aboutPage', component: AboutComponent },
  { path: 'contactPage', component: ContactComponent },
  { path: 'registerPage', component: RegisterComponent },
  { path: 'loginPage', component: LoginComponent },
  { path: 'logoutPage', component: LogoutComponent },
  { path: 'homePage', component: HomepageComponent },
  { path: 'postPopup', component: PostPopupComponent },
];

@NgModule({
  declarations: [		
    NavBarComponent,
    LandingComponent,
    AboutComponent,	
    RegisterComponent,	
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ContactComponent,
    HomepageComponent,
    PostPopupComponent,
   ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forRoot(routes),
      HttpClientModule,
      BsDropdownModule.forRoot(),
      BrowserAnimationsModule
    ],
  providers: [
    UserServiceService,
    AlertifyService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
