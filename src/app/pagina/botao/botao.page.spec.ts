import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotaoPage } from './botao.page';

describe('BotaoPage', () => {
  let component: BotaoPage;
  let fixture: ComponentFixture<BotaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BotaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
