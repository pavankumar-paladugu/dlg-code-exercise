import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgInputComponent } from './dlg-input.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('DlgInputComponent', () => {
  let component: DlgInputComponent;
  let fixture: ComponentFixture<DlgInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DlgInputComponent],
      imports: [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(DlgInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
