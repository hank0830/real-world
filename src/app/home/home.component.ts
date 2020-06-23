import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articles, Article } from './models/article.model';
import { ApiService } from '../api.service';
import { map, shareReplay, switchMap, mergeMap, concatMap, exhaustMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { PaginatorComponent } from '../paginator/paginator.component';



// const mockData: Article[] = [
//   {
//     // tslint:disable-next-line:quotemark
//     avator:"http://i.imgur.com/Qr71crq.jpg",
//     // tslint:disable-next-line:quotemark
//     author: "Eric Simons",
//     publishDate: new Date('2020-04-09'),
//     likes:26,
//     title:"How to build wabapps that scale",
//     // tslint:disable-next-line:max-line-length
//     // tslint:disable-next-line:quotemark
//     content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus voluptatibus, iste dolorem et inventore, veritatis esse illum, corrupti architecto quam rem dicta. Inventore labore magnam eius sunt harum, commodi aut?"
//   },
//   {
//     avator: "http://i.imgur.com/N4VcUeJ.jpg",
//     author: "Albert Pai",
//     publishDate: new Date('2020-04-09'),
//     likes: 25,
//     title:"This is the description for the post.",
//     // tslint:disable-next-line:max-line-length
//     // tslint:disable-next-line:quotemark
//     content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus voluptatibus, iste dolorem et inventore, veritatis esse illum, corrupti architecto quam rem dicta. Inventore labore magnam eius sunt harum, commodi aut?"
//   }
// ];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit {
  //  data = [];
  @ViewChild('paginator') paginator: PaginatorComponent;

  page$ = new BehaviorSubject(0);

  source$ = this.page$.pipe(
    switchMap(offset => this.service.loadData({ offset })),
    shareReplay());



  data$ = this.source$.pipe(map(result => result.articles));
  address: string;
  totalCount$ = this.service.loadData({ offset: 20 }).pipe(map(result => result.articlesCount));



  //  baseUrl = 'https://conduit.productionready.io/';
  //  data = [];
  constructor(private service: ApiService) {
    // this.loadData();
  }

  ngOnInit(): void {
    // const observer = {
    //   next: v => { },
    //   error: err => { },
    //   complete: () => { }
    // }
    // this.service.loadData().subscribe(observer);
  }

  ngAfterViewInit() {
    console.log(this.paginator);
    this.paginator.page$.subscribe(this.page$);
  }


  // loadData() {
  //  this.service.loadData().pipe(
  //    map(result=>result.articles)
  //  ).subscribe({
  //     next: (articles => {
  //       console.log(articles);
  //       this.data = articles;
  //     })
  //   });
  // }

  like(article) {
    article.likes += 1;
  }

  pageChange(idx) {
    return this.page$.next(idx * 20);
  }
}
