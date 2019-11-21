import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkoComponent } from './alko.component';

describe('AlkoComponent', () => {
  let component: AlkoComponent;
  let fixture: ComponentFixture<AlkoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlkoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
