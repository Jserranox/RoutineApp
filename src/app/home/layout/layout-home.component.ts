import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideBarComponent } from "../../shared/components/side-bar/side-bar.component";
import { HomePageComponent } from "../home-page/home-page.component";

@Component({
  selector: 'app-layout-home',
  imports: [SideBarComponent, HomePageComponent],
  templateUrl: './layout-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutHomeComponent { }
