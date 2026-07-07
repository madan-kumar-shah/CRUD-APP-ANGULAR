import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './features/authentication/login/login.component';

import { SignupComponent } from './features/authentication/signup/signup.component';

import { ForgotPasswordComponent } from './features/authentication/forgot-password/forgot-password.component';

import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { UserDashboardComponent } from './features/dashboard/user-dashboard/user-dashboard.component';

import { AdminDashboardComponent } from './features/dashboard/admin-dashboard/admin-dashboard.component';

const routes: Routes = [

{

path:'',

redirectTo:'login',

pathMatch:'full'

},

{

path:'login',

component:LoginComponent

},

{

path:'signup',

component:SignupComponent

},

{

path:'forgot-password',

component:ForgotPasswordComponent

},

{

path:'customer',

component:CustomerLayoutComponent,

children:[

{

path:'dashboard',

component:UserDashboardComponent

}

]

},

{

path:'admin',

component:AdminLayoutComponent,

children:[

{

path:'dashboard',

component:AdminDashboardComponent

}

]

},

{

path:'**',

redirectTo:'login'

}

];

@NgModule({

imports:[RouterModule.forRoot(routes)],

exports:[RouterModule]

})

export class AppRoutingModule{}