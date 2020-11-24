import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsentComponent } from './containers/consent/consent.component';
import { ConsentsComponent } from './containers/consents/consents.component';
import { MainComponent } from './main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'give-consent',
        pathMatch: 'full'
      },
      {
        path: 'give-consent',
        component: ConsentComponent
      },
      {
        path: 'consents',
        component: ConsentsComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
