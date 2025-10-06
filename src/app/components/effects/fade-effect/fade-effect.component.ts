import { ElementRef, AfterViewInit, Component, inject } from '@angular/core';

@Component({
  selector: 'app-scroll-reveal',
  standalone: true,
  template: `<ng-content></ng-content>`, 
  styleUrls: ['./fade-effect.component.css']
})
export class ScrollRevealWrapperComponent implements AfterViewInit {
  
  private el: ElementRef = inject(ElementRef); 

  ngAfterViewInit(): void {
    // Iniciamos el observador una vez que la vista se ha inicializado
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver(): void {
    
    const targetElement = this.el.nativeElement as HTMLElement;

    
    const style = targetElement.style;
    style.opacity = '0';
    style.transform = '0';
    style.transition = 'opacity 0.5s ease-out, transform 0.8s ease-out';
    style.willChange = 'opacity, transform';
    
    const options = {
      root: null, // El viewport es el elemento raíz
      rootMargin: '0px 0px -20% 0px', // Se activa cuando el elemento está un 00% dentro de la vista
      threshold: 0.1 // Porcentaje de visibilidad para activarse
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;

          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';

          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(targetElement);
  }
}
