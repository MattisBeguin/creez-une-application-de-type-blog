import { Component } from '@angular/core';
import { Post } from './shared/models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[];

  constructor() {
    this.posts = [
      new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis ipsum eu nisi malesuada rutrum. Mauris imperdiet augue lectus, a dignissim quam eleifend vitae. Duis interdum interdum tellus quis placerat.'),
      new Post('Mon deuxième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis ipsum eu nisi malesuada rutrum. Mauris imperdiet augue lectus, a dignissim quam eleifend vitae. Duis interdum interdum tellus quis placerat.'),
      new Post('Encore un post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis ipsum eu nisi malesuada rutrum. Mauris imperdiet augue lectus, a dignissim quam eleifend vitae. Duis interdum interdum tellus quis placerat.')
    ];
  }

}
