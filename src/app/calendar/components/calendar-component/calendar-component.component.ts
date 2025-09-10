import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalendarBtnComponent } from '../calendar-btn/calendar-btn.component';
import { Excercise } from '../../../Excercises/interfaces/excercise.interface';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'calendar-component',
  imports: [FullCalendarModule, CalendarBtnComponent],
  templateUrl: './calendar-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponentComponent {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridWeek',
    plugins: [dayGridPlugin, interactionPlugin],
    events: [
    ],
    eventClassNames: ['custom-calendar-event'],
  };

  addExcerciseEvent(excercise: Excercise) {

    const today = new Date().toISOString().split('T')[0];
    const newEvent = { title: excercise.name, date: today };

    this.calendarOptions = {
      ...this.calendarOptions,
      events: [
        ...(this.calendarOptions.events as any[]),
        newEvent
      ]
    };
  }

}
