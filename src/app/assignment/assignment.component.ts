import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor() { }
  bookName: string = ''

  updateBookName(event: any) {
    this.bookName = event.target.value
  }

  ngOnInit(): void {
  }

}
