import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStarratingComponent } from './ng-starrating.component';

describe('NgStarratingComponent', () => {
  let component: NgStarratingComponent;
  let fixture: ComponentFixture<NgStarratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStarratingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgStarratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
