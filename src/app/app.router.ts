import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';



import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ServicesComponent } from './services/services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './guards/authguard.service';


export const router:Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'services',component:ServicesComponent},
    {path:'login',component:LoginComponent},
    {path:'signUp',component:SignupComponent},
    {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuardService]}
]

export const routes:ModuleWithProviders = RouterModule.forRoot(router);