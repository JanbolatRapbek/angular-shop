import { Post } from './../app.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(posts: Post[], search: string = ''): Post[] {
    if (search.trim()) {
      return posts;
    }
    return posts.filter((post) => {
      return post.title.includes(search);
    });
  }
}
