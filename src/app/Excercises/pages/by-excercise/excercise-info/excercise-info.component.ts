import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Excercise } from '../../../interfaces/excercise.interface';
import { TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'excercise-info',
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './excercise-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExcerciseInfoComponent {

  excercise = input.required<Excercise>()

}
