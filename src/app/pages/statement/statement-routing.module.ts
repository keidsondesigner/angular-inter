import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatementPage } from './statement.page';

const routes: Routes = [
  {
    path: '',
    component: StatementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatementPageRoutingModule {}
