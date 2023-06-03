import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlidingPage } from './sliding.page';

describe('SlidingPage', () => {
  let component: SlidingPage;
  let fixture: ComponentFixture<SlidingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SlidingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
