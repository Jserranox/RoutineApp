import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ExcercisesGridComponent } from "../../components/excercises-grid/excercises-grid.component";
import { ExcericiseService } from '../../services/excericise.service';
import { TopButtonsComponent } from "../../components/top-buttons/top-buttons.component";
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';


@Component({
  selector: 'app-excersices-page',
  imports: [ExcercisesGridComponent, TopButtonsComponent],
  templateUrl: './excersices-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExcersicesPageComponent {

  excerciseService = inject(ExcericiseService);

  query = signal<string>('');

  excerciseResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {

      if( !params.query ) return of([]);

      return this.excerciseService.loadExcersice(params.query)
    }
  })

}
