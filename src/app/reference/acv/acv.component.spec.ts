import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcvComponent } from './acv.component';

describe('AcvComponent', () => {
  let component: AcvComponent;
  let fixture: ComponentFixture<AcvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
