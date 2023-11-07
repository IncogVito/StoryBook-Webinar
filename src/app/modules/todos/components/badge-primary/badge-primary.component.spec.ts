import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgePrimaryComponent } from './badge-primary.component';

describe('BadgePrimaryComponent', () => {
  let component: BadgePrimaryComponent;
  let fixture: ComponentFixture<BadgePrimaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgePrimaryComponent]
    });
    fixture = TestBed.createComponent(BadgePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
