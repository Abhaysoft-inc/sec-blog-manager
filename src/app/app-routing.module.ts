import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewPostComponent } from './new-post/new-post.component';



const routes: Routes = [
    { path: '', redirectTo: 'blog-list', pathMatch: 'full' },
  { path: 'blog-list', component: BlogListComponent },
  // { path: 'blog-detail', component: BlogDetailComponent },
  { path: 'blog-detail/:id', component: BlogDetailComponent },
  { path: 'edit-post/:id', component: EditPostComponent },
  {
    path: 'new-post',
    component: NewPostComponent,
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
