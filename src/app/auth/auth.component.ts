import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  
  showChatsFlag = true;
  
  constructor() { }

  ngOnInit(): void {
  }
  showChats(value){
    if(value === 'suyeshaysha0809') {
this.showChatsFlag = false;
    }
}
}
