import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidingPageRoutingModule } from './sliding-routing.module';

import { SlidingPage } from './sliding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidingPageRoutingModule
  ],
  declarations: [SlidingPage]
})
export class SlidingPageModule {}
