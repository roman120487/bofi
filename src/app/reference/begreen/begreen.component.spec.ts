import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BegreenComponent } from './begreen.component';

describe('BegreenComponent', () => {
  let component: BegreenComponent;
  let fixture: ComponentFixture<BegreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BegreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BegreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
