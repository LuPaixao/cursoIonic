import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/componentes/modal/modal.component';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async chamarModal(){
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: "my-custom-class"
    });
    return await modal.present();
  }

}
