import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFiveComponent } from './test-five.component';

describe('TestFiveComponent', () => {
  let component: TestFiveComponent;
  let fixture: ComponentFixture<TestFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
