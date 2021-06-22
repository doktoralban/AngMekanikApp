import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelinfocardsComponent } from './hotelinfocards.component';

describe('HotelinfocardsComponent', () => {
  let component: HotelinfocardsComponent;
  let fixture: ComponentFixture<HotelinfocardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelinfocardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelinfocardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
