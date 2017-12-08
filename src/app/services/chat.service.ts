import { Injectable } from '@angular/core';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

import { ChatMessage } from '../models/chat-message-model';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {
  user: firebase.User;
  chatMessages: FirebaseListObservable<ChatMessage[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;

  constructor(private fdb: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
      this.getUser().subscribe(a => {
        this.userName = a.displayName;
      });
    });
  }

  getUser() {
    const userId = this.user.uid;
    const path = `/users/${userId}`;
    return this.fdb.object(path);
  }

  getUsers() {
    const path = `/users`;
    return this.fdb.object(path);
  }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    // const email = 'test@example.com';
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: timestamp,
      userName: this.userName,
      // userName: 'test-user',
      email: email
    });
    console.log('Called semdMessage!');
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                 (now.getUTCMonth() + 1) + '/' +
                 now.getUTCDate();
    const time = now.getUTCHours() + ':' +
                 now.getUTCMinutes() + ':' +
                 now.getUTCSeconds();
    return (date + ' ' + time);
  }

  getMessages(): FirebaseListObservable<ChatMessage[]> {
    console.log('Calling getMessages');
    return this.fdb.list('messages', {
      query: {
        limitToLast: 25,
        orderByKey: true
      }
    });
  }

}



