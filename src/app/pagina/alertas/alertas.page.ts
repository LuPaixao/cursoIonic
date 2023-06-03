import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {
nome = ''
  constructor(public alert: AlertController, public as: ActionSheetController) { }
  async abrirAlert(){
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Qual é o seu nome?',
      inputs: [
        {
          name: 'nome1',
          type: 'text',
          placeholder: 'Digite o seu nome',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',
          handler: (dados) => {
            // console.log(dados);
            this.nome = dados.nome1;
          },
        },
      ],
    });

    await alert.present();
  }

  ngOnInit() {
  }
  async apresentarActionSheet() {
    const actionSheet = await this.as.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Deletar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Deletar clicked');
          },
        },
        {
          text: 'Inserir',
          icon: 'add',
          handler: () => {
            console.log('Inserir clicked');
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}