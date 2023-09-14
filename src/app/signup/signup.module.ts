import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DlgInputModule } from '../dlg-input/dlg-input.module';
import { CommonModule } from '@angular/common';
import { SignupService } from 'src/services/signup.service';

@NgModule({
    declarations: [
        SignupComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,

        DlgInputModule
    ],
    providers: [SignupService],
    exports: [SignupComponent],
    bootstrap: [SignupComponent]
})
export class SignupModule { }