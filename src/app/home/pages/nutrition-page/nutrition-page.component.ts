import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nutrition-home-page',
  imports: [ RouterLink],
  templateUrl: './nutrition-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NutritionPageComponent { }
