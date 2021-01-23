import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostBusinessComponent } from './boost-business.component';

describe('BoostBusinessComponent', () => {
  let component: BoostBusinessComponent;
  let fixture: ComponentFixture<BoostBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoostBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
