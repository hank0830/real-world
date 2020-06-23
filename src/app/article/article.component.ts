import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../home/models/article.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input('data') article;

  @Output() like = new EventEmitter<Article>();


  constructor(private router: Router) {
    this.router.createUrlTree([]);

  }

  ngOnInit(): void {
  }
  likeAction(article: Article) {
    this.like.emit(article);
  }


  gotoProfile(username) {
    this.router.navigate(['profile/', username]);
  }


}
