import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertScrollLineComponent } from './vert-scroll-line.component';

describe('VertScrollLineComponent', () => {
  let component: VertScrollLineComponent;
  let fixture: ComponentFixture<VertScrollLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertScrollLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertScrollLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
