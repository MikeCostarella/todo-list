import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  constructor() { }

  ngOnInit(): void {
    throw new Error("Failed to load the calendar. (testing error)")
  }
  selectedDate = new Date();
}
