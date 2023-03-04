import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../../app.component";

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})
export class FormPostComponent implements OnInit {

  @Output() onPost:EventEmitter<Post> = new EventEmitter<Post>()
  @ViewChild('focusElem') elementFocus: ElementRef = new ElementRef(null)

  constructor() { }

  ngOnInit(): void {
  }

  title=''
  text=''

  addPost() {
    if(this.title.trim()) {
      const post = {
        title: this.title,
        text: this.text
      }
      this.onPost.emit(post)
    }
  }

  addFocus() {
   this.elementFocus.nativeElement.focus()
  }

}
