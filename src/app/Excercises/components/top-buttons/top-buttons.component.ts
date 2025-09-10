import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';

@Component({
  selector: 'top-buttons',
  imports: [],
  templateUrl: './top-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopButtonsComponent {

  value = output<string>()

  buttons = signal([
    { name: 'tren superior', query: 'tren_superior'},
    { name: 'tren inferior', query: 'tren_inferior'}
  ])

}
