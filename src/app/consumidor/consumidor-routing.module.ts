import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumidorPage } from './consumidor.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumidorPage
  },  {
    path: 'transaccion-buena',
    loadChildren: () => import('./transaccion-buena/transaccion-buena.module').then( m => m.TransaccionBuenaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumidorPageRoutingModule {}
