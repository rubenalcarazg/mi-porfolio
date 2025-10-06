import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeControllerComponent } from "../theme-controller/theme-controller.component";
import { StatusTextComponent } from "../../components/common/status-text/status-text.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ThemeControllerComponent, StatusTextComponent, RouterLink],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent { }
