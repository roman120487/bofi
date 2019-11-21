import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlimorComponent } from './klimor.component';

describe('KlimorComponent', () => {
  let component: KlimorComponent;
  let fixture: ComponentFixture<KlimorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlimorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlimorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
