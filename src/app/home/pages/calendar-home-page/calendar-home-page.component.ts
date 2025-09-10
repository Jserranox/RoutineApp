import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'calendar-home-page',
  imports: [RouterLink],
  templateUrl: './calendar-home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarHomePageComponent { }
