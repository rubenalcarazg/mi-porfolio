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
    this.initScrollReveal();
  }

  private initScrollReveal(): void {
    const target = this.el.nativeElement as HTMLElement;

    target.style.opacity = '0';
    target.style.transition = 'opacity 1s ease-out'; 
    target.style.willChange = 'opacity';

    
    const isMobile = window.innerWidth <= 768;
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.style.opacity = '1'; 
          obs.unobserve(el); 
        }
      });
    }, {
      root: null,
      rootMargin: isMobile ? '0px 0px -2% 0px' : '0px 0px -20% 0px',
      threshold: isMobile ? 0.05 : 0.1
    });

    setTimeout(() => observer.observe(target), 50);
  }
}
