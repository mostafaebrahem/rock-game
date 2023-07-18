import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginsComponent } from './begins.component';

describe('BeginsComponent', () => {
  let component: BeginsComponent;
  let fixture: ComponentFixture<BeginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
