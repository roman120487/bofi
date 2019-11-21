import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiketechnoComponent } from './liketechno.component';

describe('LiketechnoComponent', () => {
  let component: LiketechnoComponent;
  let fixture: ComponentFixture<LiketechnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiketechnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiketechnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
