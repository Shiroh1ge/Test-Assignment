import { Component, OnInit } from '@angular/core';
import { ConsentsFacade } from './services/consents.facade';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private consentsFacade: ConsentsFacade) { }

  ngOnInit(): void {
    this.consentsFacade.getConsents();
  }

}
