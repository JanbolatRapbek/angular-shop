import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isVisiable = true;
  search = '';
  posts: Post[] = [
    {
      title: 'Backend',
      text: 'Pyton',
      id: 1,
    },
    { title: 'Frontend', text: 'Javascript', id: 2 },
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
  removePost(id: number) {
    this.posts = this.posts.filter((p) => p.id !== id);
  }
}
