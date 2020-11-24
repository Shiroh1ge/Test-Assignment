import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from '../shared/shared.module';
import { ConsentsComponent } from './containers/consents/consents.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ConsentComponent } from './containers/consent/consent.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';

@NgModule({
  declarations: [MainComponent, ConsentComponent, SideNavigationComponent, ConsentsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    SharedModule
  ]
})
export class MainModule { }
