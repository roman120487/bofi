import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPowerComponent } from './admin-power.component';

describe('AdminPowerComponent', () => {
  let component: AdminPowerComponent;
  let fixture: ComponentFixture<AdminPowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
