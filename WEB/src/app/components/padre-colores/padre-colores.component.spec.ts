import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreColoresComponent } from './padre-colores.component';

describe('PadreColoresComponent', () => {
  let component: PadreColoresComponent;
  let fixture: ComponentFixture<PadreColoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreColoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
