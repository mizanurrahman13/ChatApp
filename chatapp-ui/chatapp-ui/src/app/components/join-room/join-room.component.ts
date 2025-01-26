import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from '../../chat.service';

@Component({
  selector: 'app-join-room',
  standalone: false,
  
  templateUrl: './join-room.component.html',
  styleUrl: './join-room.component.css'
})
export class JoinRoomComponent {
  joinRoomForm!: FormGroup;
  fb = inject(FormBuilder);
  router = inject(Router);
  chatService = inject(ChatService);

  ngOnInit(): void {
    this.joinRoomForm = this.fb.group({
      userName: ['', Validators.required],
      chatRoomName: ['', Validators.required]
    });
  }

  joinRoom(){
    const {userName, chatRoomName} = this.joinRoomForm.value;
    sessionStorage.setItem("userName", userName);
    sessionStorage.setItem("chatRoomName", chatRoomName);
    this.chatService.joinRoom(userName, chatRoomName)
    .then(()=>{
      this.router.navigate(['chat']);
    }).catch((err)=>{
      console.log(err);
    })

  }
}
