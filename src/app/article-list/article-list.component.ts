import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../services/articledatapass.service';
import { Article } from '../article.interface'

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {
  sliceStart : number = 0;
  sliceLength: number = 12;
  sliceEnd : number = this.sliceLength;
  indexStart : number = 0;
  indexSliceLength: number = 5;
  indexEnd : number = this.indexStart+this.indexSliceLength;
  pageIndices: number[] = [];

  exemple_article_1 : Article = {
    articleId: '1',
    articleName: 'T-shirt Alone',
    articleImageUrls: ['assets/images/1.jpg', 'assets/images/4.jpg', 'assets/images/3.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
    articleDescription: 'slm alikom hedhi description',
    articlePrice: '250DT',
    articleOwnerId: '1',
    articleOwnerName: 'Amine',
    articleOwnerRegion: 'sfax',
    articleOwnerProfilePic: 'assets/images/profilepic.png',
  }
  exemple_article_2 : Article = {
    articleId: '2',
    articleName: 'T-shirt Red',
    articleImageUrls: ['assets/images/2.jpg', 'assets/images/4.jpg', 'assets/images/3.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
    articleDescription: 'slm alikom hedhi description',
    articlePrice: '230DT',
    articleOwnerId: '2',
    articleOwnerName: 'Moheb',
    articleOwnerRegion: 'Kebili',
    articleOwnerProfilePic: 'assets/images/profilepic.png',
  }
  exemple_article_3 : Article = {
    articleId: '3',
    articleName: 'T-shirt Red',
    articleImageUrls: ['assets/images/3.jpg', 'assets/images/4.jpg', 'assets/images/3.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
    articleDescription: 'slm alikom hedhi description',
    articlePrice: '230DT',
    articleOwnerId: '2',
    articleOwnerName: 'Moheb',
    articleOwnerRegion: 'Kebili',
    articleOwnerProfilePic: 'assets/images/profilepic.png',
  }
  exemple_article_4 : Article = {
    articleId: '4',
    articleName: 'T-shirt Red',
    articleImageUrls: ['assets/images/4.jpg', 'assets/images/4.jpg', 'assets/images/3.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
    articleDescription: 'slm alikom hedhi description',
    articlePrice: '230DT',
    articleOwnerId: '2',
    articleOwnerName: 'Moheb',
    articleOwnerRegion: 'Kebili',
    articleOwnerProfilePic: 'assets/images/profilepic.png',
  }
  exemple_article_5 : Article = {
    articleId: '5',
    articleName: 'T-shirt Red',
    articleImageUrls: ['assets/images/3.jpg', 'assets/images/3.jpg', 'assets/images/3.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
    articleDescription: 'slm alikom hedhi description',
    articlePrice: '230DT',
    articleOwnerId: '2',
    articleOwnerName: 'Moheb',
    articleOwnerRegion: 'Kebili',
    articleOwnerProfilePic: 'assets/images/profilepic.png',
  }
  articles: Article[] = [
    this.exemple_article_4,
    this.exemple_article_2,
    this.exemple_article_5,
    this.exemple_article_2,
    this.exemple_article_1,
    this.exemple_article_2,
    this.exemple_article_3,
    this.exemple_article_2,
    this.exemple_article_1,
    this.exemple_article_1,
    this.exemple_article_1,
    this.exemple_article_4,
    this.exemple_article_1,
    this.exemple_article_2,
    this.exemple_article_2,
    this.exemple_article_3,
    this.exemple_article_1,
    this.exemple_article_2,
    this.exemple_article_1,
    this.exemple_article_2,
    this.exemple_article_5,
    this.exemple_article_2,
    this.exemple_article_1,
    this.exemple_article_1,
    this.exemple_article_2,
    this.exemple_article_2,
    this.exemple_article_5,
    this.exemple_article_2,
    this.exemple_article_2,
    this.exemple_article_3,
    this.exemple_article_5,
    this.exemple_article_2,
    this.exemple_article_4,
    this.exemple_article_3,
    this.exemple_article_1,
  ];

  get articleSlice(){
    return this.articles.slice(this.sliceStart, this.sliceEnd);
  }

  getSlice(a: number){
    this.sliceStart =  a*this.sliceLength;
    this.sliceEnd =  this.sliceStart + this.sliceLength;

    if(this.sliceStart > this.articles.length-this.sliceLength){
      this.sliceStart = this.articles.length-this.sliceLength;
      this.sliceEnd = this.articles.length;
    }
  }

  /*getNextSlice(){
    this.sliceStart +=  this.sliceLength;
    this.sliceEnd +=  this.sliceLength;
  }

  getPrevSlice(){
    this.sliceStart -=  this.sliceLength;
    this.sliceEnd -=  this.sliceLength;
  }*/

  get indexSlice(){
    return this.pageIndices.slice(this.indexStart, this.indexEnd);
  }

  getNextIndexSlice(){
    this.indexStart +=  this.indexSliceLength;
    this.indexEnd +=  this.indexSliceLength;
  }
  getPrevIndexSlice(){
    this.indexStart -=  this.indexSliceLength;
    this.indexEnd -=  this.indexSliceLength;
  }
  
  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(){
    this.pageIndices = Array(Math.ceil(this.articles.length / this.sliceLength))
    .fill(0)
    .map((_, i) => i + 1);
  }

  onArticleClick(article: Article) {
    this.articleService.setArticle(article);
    this.router.navigate(['/product', article.articleId]);
  }

  public isFilterVisible: boolean = false;

  // Show the filter
  popUpFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }

  closeFilter() {
      this.isFilterVisible = false;
  }
  
  stopPropagation(event: Event) {
    event.stopPropagation();
  }

}
