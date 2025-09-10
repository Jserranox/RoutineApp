import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CalendarBtnComponent } from "../../components/calendar-btn/calendar-btn.component";
import { CalendarComponentComponent } from "../../components/calendar-component/calendar-component.component";

@Component({
  selector: 'app-calendar-page',
  imports: [CalendarBtnComponent, CalendarComponentComponent],
  templateUrl: './calendar-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalendarPageComponent {


}
