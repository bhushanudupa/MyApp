import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sec-assignment',
  templateUrl: './sec-assignment.component.html',
  styleUrls: ['./sec-assignment.component.css']
})
export class SecAssignmentComponent implements OnInit {

  constructor() { }
  age!: string;
  birthYear: string = '';
  currentYear!: string;
  getAge(event: any) {
    this.age = event.target.value
  }
  calculateBirthYear() {
    this.currentYear = new Date().getFullYear().toString();
    const currentYearNumber = parseInt(this.currentYear, 10)
    this.birthYear = (currentYearNumber - parseInt(this.age)).toString();
  }

  ngOnInit(): void {
  }

}
