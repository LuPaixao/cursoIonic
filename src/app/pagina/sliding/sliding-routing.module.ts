import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidingPage } from './sliding.page';

const routes: Routes = [
  {
    path: '',
    component: SlidingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidingPageRoutingModule {}
