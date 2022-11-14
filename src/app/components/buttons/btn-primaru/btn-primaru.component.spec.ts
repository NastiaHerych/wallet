import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPrimaruComponent } from './btn-primaru.component';

describe('BtnPrimaruComponent', () => {
  let component: BtnPrimaruComponent;
  let fixture: ComponentFixture<BtnPrimaruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnPrimaruComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnPrimaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
