import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoColoresComponent } from './hijo-colores.component';

describe('HijoColoresComponent', () => {
  let component: HijoColoresComponent;
  let fixture: ComponentFixture<HijoColoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoColoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
