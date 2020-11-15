import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
  textArray = [] ;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getMessages();
  }
getMessages() {
this.dataService.getText().subscribe((res)=> {
  this.textArray = res['messages'];
  this.textArray = this.textArray.reverse();
 //  console.log(this.textArray)
})
}
}
