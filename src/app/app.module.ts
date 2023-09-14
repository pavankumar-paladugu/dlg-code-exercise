import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupModule } from './signup/signup.module';
import { DlgInputModule } from './dlg-input/dlg-input.module';
import { SuccessComponent } from './success/success.component';
import { SignupService } from 'src/services/signup.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    SignupModule,
    DlgInputModule
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
