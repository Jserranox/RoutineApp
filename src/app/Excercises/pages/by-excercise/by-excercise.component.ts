import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExcericiseService } from '../../services/excericise.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ExcerciseInfoComponent } from "./excercise-info/excercise-info.component";

@Component({
  selector: 'app-by-excercise',
  imports: [ExcerciseInfoComponent],
  templateUrl: './by-excercise.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ByExcerciseComponent {

  excerciseCode = inject(ActivatedRoute).snapshot.params['code'];
  excerciseService = inject(ExcericiseService);

  excerciseResource = rxResource({
    params: () => ({ code: this.excerciseCode }),
    stream: ({ params }) => {
      return this.excerciseService.searchByCode(params.code);
    }
  })

}
