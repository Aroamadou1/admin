import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  locale= 'fr';
  constructor() { }

  ngOnInit() {
  }
  handleDateClick(arg) { // handler method
    // alert(arg.dateStr);
    console.log(arg);
  }
}
