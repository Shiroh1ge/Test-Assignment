import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { takeWhile } from 'rxjs/operators';
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

  constructor(private consentsFacade: ConsentsFacade, private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.list.paginator = this.paginator;
  }

  // public onPageChanged(i: number): void {
  //   console.log('i', i);
  //   this.paginator.pageIndex = i;
  //
  //   this.paginator.page.next({
  //     pageIndex: i,
  //     pageSize: this.paginator.pageSize,
  //     length: this.paginator.length
  //   });
  //
  //   this.cdr.detectChanges();
  // }

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
