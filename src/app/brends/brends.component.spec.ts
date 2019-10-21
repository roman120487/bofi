import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrendsComponent } from './brends.component';

describe('BrendsComponent', () => {
  let component: BrendsComponent;
  let fixture: ComponentFixture<BrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
