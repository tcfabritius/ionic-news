import { Component } from '@angular/core';
import { NewsArticlesService } from '../api/news-articles.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedCategory:any = 'technology'
  topHeadlines:any = []

  constructor(private articleService:NewsArticlesService) {
    articleService.getTopHeadlines().subscribe((results) => {
      this.topHeadlines.push(...results.articles)
    })

    articleService.getArticleByCategory().subscribe((results) => {

    })
  }

}
