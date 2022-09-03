import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportapnacomplexComponent } from './exportapnacomplex.component';

describe('ExportapnacomplexComponent', () => {
  let component: ExportapnacomplexComponent;
  let fixture: ComponentFixture<ExportapnacomplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportapnacomplexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportapnacomplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
