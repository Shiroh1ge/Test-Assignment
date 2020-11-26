import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { takeWhile } from 'rxjs/operators';
import { ConsentGrant } from '../../../../enums/consent-grant.enum';
import { ConsentModel } from '../../../../models/consent.model';
import { ConsentsFacade } from '../../services/consents.facade';

@Component({
  selector: 'app-consents',
  templateUrl: './consents.component.html',
  styleUrls: ['./consents.component.scss']
})
export class ConsentsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private componentAlive: boolean = true;
  public list = new MatTableDataSource<ConsentModel>();
  public displayedColumns = ['name', 'email', 'consentGrants'];
  public grantsTextMap = {
    [ConsentGrant.NEWSLETTER]: 'Receive newsletter',
    [ConsentGrant.TARGETED_ADS]: 'Be shown targeted ads',
    [ConsentGrant.ANONYMOUS_STATISTICS]: 'Contribute to anonymous visit statistics'
  };

  constructor(private consentsFacade: ConsentsFacade) {
  }

  ngAfterViewInit() {
    this.list.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.consentsFacade.consents$
      .pipe(
        takeWhile(() => this.componentAlive)
      )
      .subscribe(consents => {
        this.list.data = consents;
      });
  }

  ngOnDestroy() {
    this.componentAlive = false;
  }

}
