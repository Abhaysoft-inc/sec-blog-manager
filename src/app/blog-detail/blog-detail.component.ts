import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  blogPost: any = {};


  constructor( private router: Router,private loadingService: LoadingService,private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit() {
    this.loadingService.presentLoading();
    this.route.params.subscribe((params) => {
      const blogId = params['id'];
      console.log(blogId);

      this.blogService.getBlogPostById(blogId).subscribe((data: any) => {
        this.blogPost = data;
        this.loadingService.dismissLoading();
      },(error) => {
        console.error('API request error:', error);
        this.loadingService.dismissLoading(); // Dismiss the loading indicator in case of an error
      });
    });
    
  }
  
  updatePost() {
    this.route.params.subscribe((params) => {
      const blogId = params['id'];
      console.log(blogId);

      this.router.navigate(['/edit-post', blogId]);
      });
    // Implement the logic for updating the post here
    // For example, you can navigate to an edit page
    
  }

  deletePost() {
    // Implement the logic for deleting the post here
    // For example, you can show a confirmation dialog
    // and delete the post upon user confirmation
  }
  
}
