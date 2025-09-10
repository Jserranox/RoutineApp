import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  imports: [RouterLink],
  templateUrl: './auth-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent { }
