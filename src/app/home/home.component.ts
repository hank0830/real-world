import { Component, OnInit } from '@angular/core';



const mockData: Article[] = [
  {
    // tslint:disable-next-line:quotemark
    avator:"http://i.imgur.com/Qr71crq.jpg",
    // tslint:disable-next-line:quotemark
    author: "Eric Simons",
    publishDate: new Date('2020-04-09'),
    likes:26,
    title:"How to build wabapps that scale",
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:quotemark
    content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus voluptatibus, iste dolorem et inventore, veritatis esse illum, corrupti architecto quam rem dicta. Inventore labore magnam eius sunt harum, commodi aut?"
  },
  {
    avator: "http://i.imgur.com/N4VcUeJ.jpg",
    author: "Albert Pai",
    publishDate: new Date('2020-04-09'),
    likes: 25,
    title:"This is the description for the post.",
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:quotemark
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus voluptatibus, iste dolorem et inventore, veritatis esse illum, corrupti architecto quam rem dicta. Inventore labore magnam eius sunt harum, commodi aut?"
  }
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})




export class HomeComponent implements OnInit {
 data = mockData;
 address : string;
//  data = [];
  constructor() { }

  ngOnInit(): void {
  }


like(article:Article){
  article.likes += 1;
}



}




export interface Article{
  avator : string;
  author: string;
  publishDate : Date;
  likes: number;
  title: string;
  content: string;
}
