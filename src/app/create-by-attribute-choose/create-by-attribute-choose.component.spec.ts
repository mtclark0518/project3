import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateByAttributeChooseComponent } from './create-by-attribute-choose.component';

describe('CreateByAttributeChooseComponent', () => {
  let component: CreateByAttributeChooseComponent;
  let fixture: ComponentFixture<CreateByAttributeChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateByAttributeChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateByAttributeChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
