import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
escolha = "tec"
  constructor() { }

  ngOnInit() {
  }
alterar(evento: any){
  console.log(evento.detail.value)
  this.escolha = evento.detail.value;
}
}
