import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Field } from 'src/interfaces/field.model';

@Component({
  selector: 'app-dlg-input',
  templateUrl: './dlg-input.component.html',
  styleUrls: ['./dlg-input.component.scss']
})
export class DlgInputComponent {
  @Input() field = new Field();
  @Input() fg: FormGroup;
  @Input() submitted = false;
  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({});
  }
}
