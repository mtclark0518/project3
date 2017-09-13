import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateByColorComponent } from './create-by-color.component';

describe('CreateByColorComponent', () => {
  let component: CreateByColorComponent;
  let fixture: ComponentFixture<CreateByColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateByColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateByColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
