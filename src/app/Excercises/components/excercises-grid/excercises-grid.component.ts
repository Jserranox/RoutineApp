import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Excercise } from '../../interfaces/excercise.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'excercises-grid',
  imports: [RouterLink],
  templateUrl: './excercises-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExcercisesGridComponent {

  excercises = input.required<Excercise[]>();

}
