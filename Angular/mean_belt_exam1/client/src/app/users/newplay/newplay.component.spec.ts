import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewplayComponent } from './newplay.component';

describe('NewplayComponent', () => {
  let component: NewplayComponent;
  let fixture: ComponentFixture<NewplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
