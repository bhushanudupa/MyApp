import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAssignmentComponent } from './sec-assignment.component';

describe('SecAssignmentComponent', () => {
  let component: SecAssignmentComponent;
  let fixture: ComponentFixture<SecAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
