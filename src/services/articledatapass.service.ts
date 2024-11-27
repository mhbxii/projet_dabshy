import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../app/article.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articleSource = new BehaviorSubject<Article | null>(null);
  currentArticle = this.articleSource.asObservable();

  constructor() {}

  // Set the article data to the service
  setArticle(article: Article) {
    this.articleSource.next(article);
  }
}
