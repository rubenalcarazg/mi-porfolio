import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeControllerComponent } from "./shared/theme-controller/theme-controller.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { HeroComponent } from "./pages/hero/hero.component";
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { TecnologiasComponent } from "./pages/tecnologias/tecnologias.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeControllerComponent, NavbarComponent, HeroComponent, AboutMeComponent, ExperienceComponent, TecnologiasComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('porfolio');
}
