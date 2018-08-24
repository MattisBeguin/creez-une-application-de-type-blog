import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable()
export class PostService {
  posts = [
    new Post(1, 'Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis ipsum eu nisi malesuada rutrum. Mauris imperdiet augue lectus, a dignissim quam eleifend vitae. Duis interdum interdum tellus quis placerat.'),
    new Post(2, 'Mon deuxième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis ipsum eu nisi malesuada rutrum. Mauris imperdiet augue lectus, a dignissim quam eleifend vitae. Duis interdum interdum tellus quis placerat.'),
    new Post(3, 'Encore un post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis ipsum eu nisi malesuada rutrum. Mauris imperdiet augue lectus, a dignissim quam eleifend vitae. Duis interdum interdum tellus quis placerat.')
  ];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPostSubject() {
    this.postsSubject.next(this.posts);
  }

  getIndexByPost(post: Post) {
    const index = this.posts.findIndex(
      (element) => {
        if(element === post) {
          return true;
        }
      }
    );
    return index;
  }

  getPostById(id: number) {
    const post = this.posts.find(
      (element) => {
        return element.id === id;
      }
    );
    return post;
  }

  updateNumberLoveIts(post: Post, value: number) {
    const postObjectToUpdate = this.getPostById(post.id);
    postObjectToUpdate.loveIts += value;
    this.emitPostSubject();
  }

  addPost(title: string, content: string) {
    if(this.posts.length > 0) {
      var id = this.posts[(this.posts.length - 1)].id + 1;
    } else {
      var id = 0;
    }
    const post = new Post(id, title, content);
    this.posts.push(post);
    this.emitPostSubject();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.getIndexByPost(post);
    this.posts.splice(postIndexToRemove, 1);
    this.emitPostSubject();
  }

}
