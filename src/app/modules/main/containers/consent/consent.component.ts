import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})
export class ConsentComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({

  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
