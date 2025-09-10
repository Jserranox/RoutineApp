import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-calendar-page',
  imports: [],
  templateUrl: './calendar-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalendarPageComponent { }
