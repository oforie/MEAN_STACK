import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundersComponent } from './sounders.component';

describe('SoundersComponent', () => {
  let component: SoundersComponent;
  let fixture: ComponentFixture<SoundersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
