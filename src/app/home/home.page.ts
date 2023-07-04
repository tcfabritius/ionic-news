import { Component } from '@angular/core';
import { NewsArticlesService } from '../api/news-articles.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedCategory:any = 'technology'
  topHeadlines:any = []

  constructor(private articleService:NewsArticlesService, private router:Router) {
    articleService.getTopHeadlines().subscribe((results) => {
      this.topHeadlines.push(...results.articles)
    })

    articleService.getArticleByCategory().subscribe((results) => {

    })
  }

  getDetails(selectedArticle: { author: any; content: any; description: any; publishedAt: any; source: any; title: any; url: any; urlToImage: any; }){
    const params: NavigationExtras = {
      queryParams: {
        'author': selectedArticle.author,
        'content': selectedArticle.content,
        'description': selectedArticle.description,
        'publishedAt': selectedArticle.publishedAt,
        'source': selectedArticle.source.name,
        'title': selectedArticle.title,
        'url': selectedArticle.url,
        'urlToImage': selectedArticle.urlToImage
      }
    }
    this.router.navigate(['/details'], params)
  }

}
