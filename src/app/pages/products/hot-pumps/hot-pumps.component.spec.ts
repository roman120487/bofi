import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotPumpsComponent } from './hot-pumps.component';

describe('HotPumpsComponent', () => {
  let component: HotPumpsComponent;
  let fixture: ComponentFixture<HotPumpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotPumpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotPumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
