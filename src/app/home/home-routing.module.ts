import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CardviewComponent } from '../cardview/cardview.component';

const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'home', component: HomePage},
  {path: 'cardview', component: CardviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
