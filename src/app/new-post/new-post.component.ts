import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private postService: PostService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onSubmitForm() {
    const formValue = this.postForm.value;
    this.postService.addPost(formValue['title'], formValue['content']);
    this.router.navigate(['/posts']);
  }

}
