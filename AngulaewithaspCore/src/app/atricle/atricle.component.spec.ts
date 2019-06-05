import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtricleComponent } from './atricle.component';

describe('AtricleComponent', () => {
  let component: AtricleComponent;
  let fixture: ComponentFixture<AtricleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtricleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtricleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
