import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsButtonComponent } from './elements-button.component';

describe('ElementsButtonComponent', () => {
  let component: ElementsButtonComponent;
  let fixture: ComponentFixture<ElementsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
