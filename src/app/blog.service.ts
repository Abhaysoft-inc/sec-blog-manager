import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getBlogPostTitles() {
    return this.http.get('https://secureblog-backend.onrender.com/api/blogs');
  }
  getBlogPostById(id: number): Observable<any> {
    return this.http.get(`https://secureblog-backend.onrender.com/api/blogs/${id}`);
  }
  updatePostById(id:any,postData: any): Observable<any> {
    return this.http.put(`https://secureblog-backend.onrender.com/api/blogs/${id}`, postData);
  }
  createPost(newPostData: any): Observable<any> {
    return this.http.post('https://secureblog-backend.onrender.com/api/blogs', newPostData);
  }
}
