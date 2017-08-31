import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateByAttributeDismissComponent } from './create-by-attribute-dismiss.component';

describe('CreateByAttributeComponent', () => {
  let component: CreateByAttributeDismissComponent;
  let fixture: ComponentFixture<CreateByAttributeDismissComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateByAttributeDismissComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateByAttributeDismissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
