import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavItems } from '../../interfaces/items.interface';

@Component({
  selector: 'navbar-component',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {

  items = input.required<NavItems[]>()

}
