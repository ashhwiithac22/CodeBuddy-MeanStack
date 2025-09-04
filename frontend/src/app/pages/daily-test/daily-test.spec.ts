import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTest } from './daily-test';

describe('DailyTest', () => {
  let component: DailyTest;
  let fixture: ComponentFixture<DailyTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
