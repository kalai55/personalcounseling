import { Component, OnInit } from '@angular/core';
import {ChatService, Message} from './chat.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
declare let $: any;

@Component({
  selector: 'app-chatcompoent',
  templateUrl: './chatcompoent.component.html',
  styleUrls: ['./chatcompoent.component.css'],
  providers: [ChatService]
})
export class ChatcompoentComponent implements OnInit {

  messages: Observable<Message[]>;
  strMsg: string;
  constructor(private chat: ChatService) { }
  ngOnInit() {
    this.messages = this.chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val));
  }
  sendMessage() {
    if (this.strMsg) {
      this.chat.talk(this.strMsg);
    }
    this.strMsg = '';
  }


}
