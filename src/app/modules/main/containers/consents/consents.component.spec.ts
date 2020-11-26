import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { mockConsents } from '../../../../constants/mock-data';
import { ConsentModel } from '../../../../models/consent.model';
import { SharedModule } from '../../../shared/shared.module';
import { ConsentsFacade } from '../../services/consents.facade';
import { ConsentsStateModel } from '../../store/models/consents-state.model';

import { ConsentsComponent } from './consents.component';

class MockConsentsFacade {
  consents$: Observable<ConsentModel[]> = of(mockConsents);
}

describe('ConsentsComponent', () => {
  let component: ConsentsComponent;
  let fixture: ComponentFixture<ConsentsComponent>;
  let store: MockStore<ConsentsStateModel>;
  let consentsFacade: ConsentsFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, BrowserAnimationsModule, ReactiveFormsModule, MatSidenavModule],
      declarations: [ConsentsComponent],
      providers: [
        provideMockStore({}),
        { provide: ConsentsFacade, useClass: MockConsentsFacade }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentsComponent);
    store = TestBed.get<Store<ConsentsStateModel>>(Store);
    consentsFacade = TestBed.inject(ConsentsFacade);
    component = new ConsentsComponent(consentsFacade);

    component.ngOnInit();
    fixture.detectChanges();
  });

  it('consents should be an array', () => {
    // Trigger ngOnInit()
    fixture.detectChanges();

    expect(Array.isArray(component.list.data)).toBeTruthy();
  });

  it('table data should exist', () => {
    // Trigger ngOnInit()
    fixture.detectChanges();

    expect(component.list.data.length).toBeTruthy();
  });
});
