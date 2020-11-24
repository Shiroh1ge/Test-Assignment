import { Component, OnInit } from '@angular/core';

interface Route {
  name: string;
  path: string
}

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  public routes: Route[] = [
    {
      name: 'Give Consents',
      path: 'give-consent'
    },
    {
      name: 'Collected consents',
      path: 'consents'
    }
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
