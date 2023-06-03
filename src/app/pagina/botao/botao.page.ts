import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.page.html',
  styleUrls: ['./botao.page.scss'],
})
export class BotaoPage implements OnInit {

  constructor(public nav: NavController, public toastCtrl: ToastController) { }
  abrirPagina(){
    this.nav.navigateForward('home');
  }
  ngOnInit() {
  }

  async metodoToast(){
    const toast = await this.toastCtrl.create({
      message: 'Você clicou no botão',
      duration: 2000,
    });
    toast.present();
  }

}
