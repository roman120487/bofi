import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetairComponent } from './getair.component';

describe('GetairComponent', () => {
  let component: GetairComponent;
  let fixture: ComponentFixture<GetairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
