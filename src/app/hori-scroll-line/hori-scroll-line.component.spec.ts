import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoriScrollLineComponent } from './hori-scroll-line.component';

describe('HoriScrollLineComponent', () => {
  let component: HoriScrollLineComponent;
  let fixture: ComponentFixture<HoriScrollLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoriScrollLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoriScrollLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
