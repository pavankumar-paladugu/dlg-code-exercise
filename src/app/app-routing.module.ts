import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', component: SignupComponent
  },
  {
    path: 'signUp', component: SignupComponent
  },
  {
    path: 'success', component: SuccessComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
