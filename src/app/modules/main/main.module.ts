import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { ConsentComponent } from './containers/consent/consent.component';
import { ConsentsComponent } from './containers/consents/consents.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ConsentsFacade } from './services/consents.facade';
import { ConsentsService } from './services/consents.service';
import { mainEffects } from './store/effects';
import { consentsReducer } from './store/reducers/consents.reducer';

@NgModule({
  declarations: [MainComponent, ConsentComponent, SideNavigationComponent, ConsentsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    StoreModule.forFeature('consents', consentsReducer),
    EffectsModule.forFeature([...mainEffects]),
    SharedModule
  ],
  providers: [
    ConsentsFacade,
    ConsentsService
  ]
})
export class MainModule {
}
