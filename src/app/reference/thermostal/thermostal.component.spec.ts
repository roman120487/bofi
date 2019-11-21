import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermostalComponent } from './thermostal.component';

describe('ThermostalComponent', () => {
  let component: ThermostalComponent;
  let fixture: ComponentFixture<ThermostalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermostalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermostalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
