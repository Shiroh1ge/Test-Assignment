import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsentGrant } from '../../../../enums/consent-grant.enum';
import { ConsentsFacade } from '../../services/consents.facade';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})
export class ConsentComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null, [Validators.required]),
      consentGrants: new FormArray([], [Validators.required])
    }
  );
  public ConsentGrant = ConsentGrant;

  constructor(private formBuilder: FormBuilder, private consentsFacade: ConsentsFacade, private router: Router) {
  }

  public toggleAddConsentGrant(grant: ConsentGrant): void {
    const grantsFormArray = this.form.get('consentGrants') as FormArray;

    grantsFormArray.getRawValue().includes(grant)
      ? grantsFormArray.removeAt(grantsFormArray.getRawValue().indexOf(grant))
      : grantsFormArray.controls.push(new FormControl(grant));
    grantsFormArray.patchValue(grantsFormArray.getRawValue());
  }

  public onSubmit(): void {
    this.consentsFacade.createConsent(this.form.value);
  }

  ngOnInit(): void {
    this.consentsFacade.createConsentSuccess$().subscribe(consent => {
      this.router.navigate(['/consents']);
    });
  }

}
