import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChelseaComponent } from './chelsea.component';

describe('ChelseaComponent', () => {
  let component: ChelseaComponent;
  let fixture: ComponentFixture<ChelseaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChelseaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChelseaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
