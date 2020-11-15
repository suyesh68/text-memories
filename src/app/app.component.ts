import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild ( 'passCode') textMessage: HTMLElement
 public  showChats = false;

  title = 'talk-memories';
}
