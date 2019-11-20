import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JevenComponent } from './jeven.component';

describe('JevenComponent', () => {
  let component: JevenComponent;
  let fixture: ComponentFixture<JevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
