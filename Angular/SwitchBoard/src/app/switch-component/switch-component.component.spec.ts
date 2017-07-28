import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchComponentComponent } from './switch-component.component';

describe('SwitchComponentComponent', () => {
  let component: SwitchComponentComponent;
  let fixture: ComponentFixture<SwitchComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
