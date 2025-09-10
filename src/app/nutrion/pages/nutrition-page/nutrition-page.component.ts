import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SideBarComponent } from "../../../shared/components/side-bar/side-bar.component";
import { Food } from '../../interfaces/food.interface';

@Component({
  selector: 'nutrition-page',
  imports: [SideBarComponent],
  templateUrl: './nutrition-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NutritionPageComponent {

  items = signal<Food[]>([
    { name: 'Carnes A la Piedrahita', description: 'carne con arroz y tomate', src: 'Lunch'},
    { name: 'Salmon asiatico', description: 'Un filete de salmón jugoso y crujiente por fuera, con un glaseado dulce y ligeramente oriental (miel, soja, ajo), listo en unos 30 minutos. Ideal para preparar con anticipación y acompañar con vegetales al vapor o quinoa.', src: 'lunch_3'},
    { name: 'Bowl de pollo y quinoa', description: 'Una “bowl” tipo mediterráneo con quinoa, pollo a la parrilla, hummus, vegetales frescos (pepino, tomate, hojas verdes), tzatziki casero y queso feta. Es saciante, rica en proteínas y fibra, y excelente para preparar porciones al inicio de la semana.', src: 'lunch_4'},
  ])

}
