import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliding',
  templateUrl: './sliding.page.html',
  styleUrls: ['./sliding.page.scss'],
})
export class SlidingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  teste(){
    console.log("Deletando...")
  }

}
