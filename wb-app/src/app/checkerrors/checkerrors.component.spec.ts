import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckerrorsComponent } from './checkerrors.component';

describe('CheckerrorsComponent', () => {
  let component: CheckerrorsComponent;
  let fixture: ComponentFixture<CheckerrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckerrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckerrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
