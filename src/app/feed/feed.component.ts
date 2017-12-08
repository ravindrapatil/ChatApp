import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models/chat-message-model';
import { ChatService } from '../services/chat.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feed: FirebaseListObservable<ChatMessage[]>;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    console.log('feed initializing....');
    this.feed = this.chatService.getMessages();
  }

  ngOnChanges() {
    this.feed = this.chatService.getMessages();
  }

}
