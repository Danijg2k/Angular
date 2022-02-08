import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFromUrlComponent } from './product-from-url.component';

describe('ProductFromUrlComponent', () => {
  let component: ProductFromUrlComponent;
  let fixture: ComponentFixture<ProductFromUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFromUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFromUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
