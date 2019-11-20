import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminСharacteristicsComponent } from './admin-characteristics.component';

describe('AdminPowerComponent', () => {
  let component: AdminСharacteristicsComponent;
  let fixture: ComponentFixture<AdminСharacteristicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminСharacteristicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminСharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
