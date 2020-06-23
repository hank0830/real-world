import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() totalCount;
  @Input() pageSize = 20;

  page$ = new BehaviorSubject(0);
  // @Output() pageChange = new EventEmitter<number>();
  pages = [];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.totalCount = changes['totalCount'].currentValue;

    if (this.totalCount) {

      this.pages = new Array(Math.ceil(this.totalCount / this.pageSize));
    }



  }
  setPage(idx) {
    this.page$.next(idx * this.pageSize);
  }


}
