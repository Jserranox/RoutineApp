import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'excercises-home-page',
  imports: [RouterLink],
  templateUrl: './excercises-home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExcercisesHomePageComponent { }
