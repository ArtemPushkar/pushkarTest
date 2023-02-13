import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pushkarTest';

  posts: Post[] = []

  onPost(post:Post) {
    this.posts.unshift(post)
  }

  condition = true

  toggle(){
    this.condition=!this.condition;
  }
}
