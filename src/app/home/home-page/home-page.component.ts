import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExcercisesHomePageComponent } from "../pages/excercises-home-page/excercises-home-page.component";
import { CalendarHomePageComponent } from "../pages/calendar-home-page/calendar-home-page.component";
import { NutritionPageComponent } from "../pages/nutrition-page/nutrition-page.component";

@Component({
  selector: 'home-page',
  imports: [ExcercisesHomePageComponent, CalendarHomePageComponent, NutritionPageComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
