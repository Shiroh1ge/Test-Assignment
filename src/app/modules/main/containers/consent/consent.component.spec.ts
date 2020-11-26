import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { mockConsents } from '../../../../constants/mock-data';
import { ConsentGrant, ConsentGrants } from '../../../../enums/consent-grant.enum';
import { ConsentModel } from '../../../../models/consent.model';
import { SharedModule } from '../../../shared/shared.module';
import { ConsentsFacade } from '../../services/consents.facade';
import { ConsentsStateModel } from '../../store/models/consents-state.model';
import { ConsentComponent } from './consent.component';

class MockConsentsFacade {
  createConsentSuccess$: () => Observable<ConsentModel> = () => of(mockConsents[0]);
}


describe('ConsentComponent', () => {
  let component: ConsentComponent;
  let fixture: ComponentFixture<ConsentComponent>;
  let store: MockStore<ConsentsStateModel>;
  let consentsFacade: ConsentsFacade;
  let getConsentsSpy;
  let consentsSpy;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, BrowserAnimationsModule, ReactiveFormsModule, MatSidenavModule, RouterTestingModule],
      declarations: [ConsentComponent],
      providers: [
        provideMockStore({}),
        { provide: ConsentsFacade, useClass: MockConsentsFacade }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentComponent);
    store = TestBed.get<Store<ConsentsStateModel>>(Store);
    consentsFacade = TestBed.inject(ConsentsFacade);
    router = TestBed.inject(Router);

    console.log('consentsFacade', consentsFacade);

    component = new ConsentComponent(new FormBuilder(), consentsFacade, router);

    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should pass validation checks for name', () => {
    const name = component.form.controls.name;


    // Should be invalid if no name input
    expect(name.invalid).toBeTruthy();

    // Should be valid if name exists
    name.setValue('John');
    expect(name.valid).toBeTruthy();

  });

  it('should pass validation checks for consent grants', () => {
    const consentGrants = component.form.controls.consentGrants as FormArray;

    // Should be invalid
    expect(consentGrants.invalid).toBeTruthy();

    // We want to make sure the consentGrants array only has allowed values (ones that exist in the ConsentGrants array)
    consentGrants.push(new FormControl(ConsentGrant.ANONYMOUS_STATISTICS));
    let hasAllowedValue = consentGrants.value.every(grant => ConsentGrants.includes(grant));
    expect(hasAllowedValue).toBeTruthy();

    // Should fail if we pass an invalid value
    consentGrants.push(new FormControl('invalid value'));
    hasAllowedValue = consentGrants.value.every(grant => ConsentGrants.includes(grant));
    expect(hasAllowedValue).toBeFalsy();

  });

  it('should pass validation checks for email', () => {
    const email = component.form.controls.email;

    // Should be invalid if email is invalid
    email.setValue('invalidEmail');
    expect(email.invalid).toBeTruthy();


    // Should be valid for valid emails
    email.setValue('asd@asd.com');
    expect(email.valid).toBeTruthy();
  });


});
