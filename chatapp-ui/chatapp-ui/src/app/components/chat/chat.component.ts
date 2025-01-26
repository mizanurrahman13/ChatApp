import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ChatService } from '../../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: false,
  
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  chatService = inject(ChatService);
  inputMessage = "";
  messages: any[] = [];
  router = inject(Router);
  loggedInUserName = sessionStorage.getItem("userName");
  roomName = sessionStorage.getItem("chatRoomName");

  @ViewChild('scrollMe') private scrollContainer!: ElementRef;


  ngOnInit(): void {
    this.chatService.messages$.subscribe(res=>{
      this.messages = res;
      console.log(this.messages)
    });

    this.chatService.connectedUsers$.subscribe(res=>{
      console.log(res);

    })
  }

  ngAfterViewChecked(): void {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }

  sendMessage(){
    this.chatService.sendMessage(this.inputMessage)
    .then(()=>{
      this.inputMessage = '';
    }).catch((err)=>{
      console.log(err);
    })
  }

  leaveChat(){
    this.chatService.leaveChat()
    .then(()=>{
      this.router.navigate(['welcome']);
      setTimeout(() => {
        location.reload();
      }, 0);
    }).catch((err)=>{
      console.log(err);
    })
  }
}
