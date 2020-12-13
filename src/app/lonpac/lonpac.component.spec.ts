import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LonpacComponent } from './lonpac.component';

describe('LonpacComponent', () => {
  let component: LonpacComponent;
  let fixture: ComponentFixture<LonpacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LonpacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LonpacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
