import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateByAttributeComponent } from './create-by-attribute.component';

describe('CreateByAttributeComponent', () => {
  let component: CreateByAttributeComponent;
  let fixture: ComponentFixture<CreateByAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateByAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateByAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
