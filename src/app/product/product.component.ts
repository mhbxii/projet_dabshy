import { Component } from '@angular/core';
import { Article } from '../article.interface';
import { ArticleService } from '../../services/articledatapass.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductPageComponent {
  constructor(private articleDataSrc: ArticleService){};

  currentImageIndex = 0;

  article : Article = {
    articleId: '',
    articleName: '',
    articleImageUrls: [],
    articlePrice: '',
    articleDescription: '',
    articleOwnerId: '',
    articleOwnerName: '',
    articleOwnerRegion: '',
    articleOwnerProfilePic: '',
  };

  mainImage = this.article.articleImageUrls[0];

  ngOnInit(){
    this.articleDataSrc.currentArticle.subscribe((data) => {
      if(data) this.article = data;
    })
  }

  setMainImage(image: string) {
    //this.mainImage = image;
  }

  BuyNow() {
    //console.log('Product added to cart:', this.product.name);
  }

  
  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.article.articleImageUrls.length;
    this.mainImage = this.article.articleImageUrls[this.currentImageIndex];
  }
  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.article.articleImageUrls.length) % this.article.articleImageUrls.length;
    this.mainImage = this.article.articleImageUrls[this.currentImageIndex];
  }
}
