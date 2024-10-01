import { Component } from '@angular/core';

interface Event {
  id: number;
  title: string;
  date: string;
}


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  events: Event[] = [];
  newEvent: Event = { id: 0, title: '', date: '' };

  addEvent() {
    this.newEvent.id = this.events.length + 1;
    this.events.push({ ...this.newEvent });
    this.newEvent = { id: 0, title: '', date: '' };
  }

  deleteEvent(eventId: number) {
    this.events = this.events.filter(event => event.id !== eventId);
  }

}
