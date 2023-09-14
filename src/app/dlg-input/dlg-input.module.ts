import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { DlgInputComponent } from "./dlg-input.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        DlgInputComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [DlgInputComponent],
    providers: [],
    bootstrap: [DlgInputComponent]
})
export class DlgInputModule { }
