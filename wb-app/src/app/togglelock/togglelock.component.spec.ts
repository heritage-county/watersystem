import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglelockComponent } from './togglelock.component';

describe('TogglelockComponent', () => {
  let component: TogglelockComponent;
  let fixture: ComponentFixture<TogglelockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogglelockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogglelockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
