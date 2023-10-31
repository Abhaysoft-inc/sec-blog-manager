import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute,Router } from '@angular/router';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogPostTitles: any[] = [];

  constructor(private loadingService: LoadingService,private route: ActivatedRoute,private blogService: BlogService, private router: Router, ) {}

  ngOnInit() {
    this.loadingService.presentLoading();
    this.blogService.getBlogPostTitles().subscribe((data: any) => {
      this.blogPostTitles = data;
      this.loadingService.dismissLoading();
    },(error) => {
      console.error('API request error:', error);
      this.loadingService.dismissLoading(); // Dismiss the loading indicator in case of an error
    });
  }
}
