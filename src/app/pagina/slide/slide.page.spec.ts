import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlidePage } from './slide.page';

describe('SlidePage', () => {
  let component: SlidePage;
  let fixture: ComponentFixture<SlidePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
