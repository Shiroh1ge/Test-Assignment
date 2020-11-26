import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';
import { ConsentsFacade } from './services/consents.facade';
import { ConsentsStateModel } from './store/models/consents-state.model';

class MockConsentsFacade {
  getConsents(): void {
    return;
  }
}

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let store: MockStore<ConsentsStateModel>;
  let consentsFacade: ConsentsFacade;
  let getConsentsSpy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, BrowserAnimationsModule, RouterTestingModule],
      declarations: [MainComponent],
      providers: [
        provideMockStore({}),
        { provide: ConsentsFacade, useClass: MockConsentsFacade }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    store = TestBed.get<Store<ConsentsStateModel>>(Store);
    consentsFacade = TestBed.inject(ConsentsFacade);
    component = new MainComponent(consentsFacade);
    getConsentsSpy = spyOn(consentsFacade, 'getConsents').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should get Consents on init', () => {
    expect(getConsentsSpy).toHaveBeenCalled();
  });
});
