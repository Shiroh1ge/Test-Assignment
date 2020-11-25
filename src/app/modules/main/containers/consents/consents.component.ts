import { Component, OnInit } from '@angular/core';
import { ConsentsFacade } from '../../services/consents.facade';

@Component({
  selector: 'app-consents',
  templateUrl: './consents.component.html',
  styleUrls: ['./consents.component.scss']
})
export class ConsentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
