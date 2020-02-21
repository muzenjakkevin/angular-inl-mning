import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SingleUserComponent } from '../single-user/single-user.component';
import { LoginComponent } from '../login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path:'singleuser', component: SingleUserComponent},
  {path:'login', 
    data: {title: 'login'},
    component: LoginComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
