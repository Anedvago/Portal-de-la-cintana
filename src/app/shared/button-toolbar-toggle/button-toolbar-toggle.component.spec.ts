import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToolbarToggleComponent } from './button-toolbar-toggle.component';

describe('ButtonToolbarToggleComponent', () => {
  let component: ButtonToolbarToggleComponent;
  let fixture: ComponentFixture<ButtonToolbarToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonToolbarToggleComponent]
    });
    fixture = TestBed.createComponent(ButtonToolbarToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
