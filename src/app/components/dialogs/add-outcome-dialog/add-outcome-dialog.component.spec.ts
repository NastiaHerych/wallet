import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOutcomeDialogComponent } from './add-outcome-dialog.component';

describe('AddOutcomeDialogComponent', () => {
  let component: AddOutcomeDialogComponent;
  let fixture: ComponentFixture<AddOutcomeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOutcomeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOutcomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
