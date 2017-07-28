import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitedComponent } from './united.component';

describe('UnitedComponent', () => {
  let component: UnitedComponent;
  let fixture: ComponentFixture<UnitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
