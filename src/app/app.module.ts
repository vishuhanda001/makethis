import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {OtpService} from './apiservices/otp.service';
import {FirebaseAuthService} from './apiservices/firebaseauth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import {Navbarscroll} from './directives/navbarscroll.directive';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {routes} from './app.router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from '../environments/environment';
import { AuthGuardService } from './guards/authguard.service';
import { YouTubeService } from './apiservices/youtube.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    LoginComponent,
    SignupComponent,
    Navbarscroll,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    DropDownsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,

    routes
  ],
  providers: [OtpService,FirebaseAuthService,AuthGuardService,YouTubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
