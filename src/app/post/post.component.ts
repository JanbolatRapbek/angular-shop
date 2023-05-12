import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit, OnChanges {
  @Input() post: Post;
  @Output() onRemove = new EventEmitter<number>();
  @ContentChild('info', { static: true }) infoRef: ElementRef;
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit() {}
  removePost() {
    this.onRemove.emit(this.post.id);
  }
}
