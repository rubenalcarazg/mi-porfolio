import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet} from '@angular/router';
import { ThemeControllerComponent } from "./shared/theme-controller/theme-controller.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { HeroComponent } from "./pages/hero/hero.component";
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { TecnologiasComponent } from "./pages/tecnologias/tecnologias.component";
import { ProyectsComponent } from "./pages/proyects/proyects.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { BackgroundComponent } from './components/effects/bg-effect/bg-effect.component';
import { ScrollRevealWrapperComponent } from './components/effects/fade-effect/fade-effect.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeControllerComponent, NavbarComponent, HeroComponent, AboutMeComponent, ExperienceComponent, TecnologiasComponent, ProyectsComponent, ContactComponent, BackgroundComponent, ScrollRevealWrapperComponent, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private routes: Router){}

  ngOnInit(){
    // this.routes.navigate(["/#hero"])
    window.scrollTo(0,0)
  }
  protected readonly title = signal('porfolio');

  toggleTheme(event: Event) {
  const checked = (event.target as HTMLInputElement).checked;
  const html = document.documentElement;
  
  if (checked) {
    html.classList.add('dark');
    html.setAttribute('data-theme', 'dark'); 
  } else {
    html.classList.remove('dark');
    html.setAttribute('data-theme', 'light'); 
  }
}


}
