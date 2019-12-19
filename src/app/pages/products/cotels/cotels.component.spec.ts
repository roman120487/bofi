import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotelsComponent } from './cotels.component';

describe('CotelsComponent', () => {
  let component: CotelsComponent;
  let fixture: ComponentFixture<CotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
