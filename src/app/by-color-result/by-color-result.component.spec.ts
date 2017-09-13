import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByColorResultComponent } from './by-color-result.component';

describe('ByColorResultComponent', () => {
  let component: ByColorResultComponent;
  let fixture: ComponentFixture<ByColorResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByColorResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByColorResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
