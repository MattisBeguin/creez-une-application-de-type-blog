import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onUpdateNumberLoveIts(value: number) {
    this.postService.updateNumberLoveIts(this.post, value);
  }

  onDeletePost() {
    this.postService.removePost(this.post);
  }

}
