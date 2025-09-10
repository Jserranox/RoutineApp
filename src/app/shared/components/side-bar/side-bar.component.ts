import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { NavItems } from '../../interfaces/items.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'side-bar',
  imports: [NavbarComponent, RouterLink],
  templateUrl: './side-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {

  navbarItems = signal<NavItems[]>([
    {name: 'Inicio', route:'/home', icon: 'fa-solid fa-house'},
    { name: 'ejercicios', route: '/excercises', icon: 'fa-solid fa-dumbbell' },
    { name: 'calendario', route:'/calendar', icon:'fa-solid fa-calendar'},
    {name: 'nutricion', route:'/nutrition', icon: 'fa-solid fa-bowl-food'},
    {name: 'Cerrar sesion', route:'/auth', icon: 'fa-solid fa-arrow-right-from-bracket'},
  ])

}
