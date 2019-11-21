import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchakoComponent } from './schako.component';

describe('SchakoComponent', () => {
  let component: SchakoComponent;
  let fixture: ComponentFixture<SchakoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchakoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchakoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
