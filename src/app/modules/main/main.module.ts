import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { ConsentsComponent } from './containers/consents/consents.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ConsentComponent } from './containers/consent/consent.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { ConsentsFacade } from './services/consents.facade';
import { ConsentsService } from './services/consents.service';
import { mainEffects } from './store/effects';
import { mainReducer } from './store/reducers';

@NgModule({
  declarations: [MainComponent, ConsentComponent, SideNavigationComponent, ConsentsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    StoreModule.forFeature('main', mainReducer),
    EffectsModule.forFeature([...mainEffects]),
    SharedModule
  ],
  providers: [
    ConsentsFacade,
    ConsentsService
  ]
})
export class MainModule { }
