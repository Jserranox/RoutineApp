import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from "../../../shared/components/side-bar/side-bar.component";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, SideBarComponent],
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarLayoutComponent { }
