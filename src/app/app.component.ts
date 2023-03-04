import {Component, Output} from '@angular/core';
import {Observable} from "rxjs";

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

  search = '';
  searchField: 'title' | 'text' = 'title';

  currentTime: Observable<Date> = new Observable<Date>(obs => {
    setInterval(()=>{
      obs.next(new Date())
    },1000)
  })

  title = 'pushkarTest';
  date: Date = new Date();

  posts: Post[] = [
    {title:'Title title title', text:'Text text text'}
  ]

  onPost(post:Post) {
    this.posts.unshift(post)
  }

  testPost() {
    if(this.title.trim()) {
      const post = {
        title: 'Test! angular test!',
        text: 'text! angular text!'
      }
      this.posts.unshift(post)
    }
  }

  condition = true

  toggle(){
    this.condition=!this.condition;
  }
}
