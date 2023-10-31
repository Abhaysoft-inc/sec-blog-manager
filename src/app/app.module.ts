import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy,RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { TrustedHtmlPipe } from './trusted-html.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent,BlogListComponent,BlogDetailComponent,TrustedHtmlPipe,EditPostComponent],
  imports: [FormsModule,RouterModule,AppRoutingModule,BrowserModule, IonicModule.forRoot(), HttpClientModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
