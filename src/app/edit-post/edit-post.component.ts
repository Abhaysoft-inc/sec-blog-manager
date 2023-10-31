import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { LoadingService } from '../loading.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent {
  post: any={};

  constructor(private alertController: AlertController,
  private router: Router ,private loadingService: LoadingService,private route: ActivatedRoute,private postService: BlogService) {}

  ngOnInit() {
    // Load the previous data into the form
    // this.loadingService.presentLoading();
    this.route.params.subscribe((params) => {
      const blogId = params['id'];
      console.log(blogId);
      this.postService.getBlogPostById(blogId).subscribe((data: any) => {
        this.post = data;
        // this.loadingService.dismissLoading();
      });
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Post Updated',
      message: 'The post has been updated successfully.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.route.params.subscribe((params) => {
              const blogId = params['id'];
              this.router.navigate(['/']);
            });
            
            // Redirect to the updated post
            
          },
        },
      ],
    });
  
    await alert.present();
  }
  

  updatePost() {
    this.route.params.subscribe((params) => {
      const blogId = params['id'];
      console.log(blogId);

      this.postService.updatePostById(blogId,this.post).subscribe((result) => {
        // Handle the update result here, e.g., show a success message
        console.log('Post updated successfully', result);
        this.presentAlert();
      });
      // this.postService.getBlogPostById(blogId).subscribe((data: any) => {
      //   this.post = data;
      //   console.log(this.post.title);
      //   // this.loadingService.dismissLoading();
      // });
    });

    
      // Implement the logic to update the post
      
    }
  }

