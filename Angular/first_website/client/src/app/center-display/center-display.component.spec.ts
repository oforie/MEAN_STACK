import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterDisplayComponent } from './center-display.component';

describe('CenterDisplayComponent', () => {
  let component: CenterDisplayComponent;
  let fixture: ComponentFixture<CenterDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
