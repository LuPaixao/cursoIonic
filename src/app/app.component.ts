import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {  title: 'Home', url: '/home', icon: 'home' }, 
    {  title: 'Botão', url: '/botao', icon: 'radio-button-off' },
    {  title: 'Lista', url: '/lista', icon: 'list' },
    {  title: 'Alerts', url: '/alertas', icon: 'card' },
    {  title: 'Infinite', url: '/infinite', icon: 'list' },
    {  title: 'Refresher', url: '/refresher', icon: 'refresh' },
    {  title: 'Contato', url: '/contato', icon: 'call' },
    {  title: 'Sliding', url: '/sliding', icon: 'albums' },
    {  title: 'Segment', url: '/segment', icon: 'albums' },
    {  title: 'Slide', url: '/slide', icon: 'image' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
