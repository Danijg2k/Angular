import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

import { IndexComponentComponent } from './index-component.component';


describe('IndexComponentComponent', () => {
  let component: IndexComponentComponent;
  let fixture: ComponentFixture<IndexComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
