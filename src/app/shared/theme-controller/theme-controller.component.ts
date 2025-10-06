import { ChangeDetectionStrategy, Component, ElementRef, inject, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-theme-controller',
  imports: [],
  templateUrl: './theme-controller.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeControllerComponent { 

  private el = inject(ElementRef);
  
  currentTheme: WritableSignal<string> = signal('light');

  constructor() {
    
    this.initializeTheme();
    
    setTimeout(() => {
      this.setupIntersectionObserver();
    }, 0);
  }
  
  initializeTheme(): void {
    if (typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'light';
      this.currentTheme.set(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }

  toggleTheme(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    const newTheme = isChecked ? 'dark' : 'light';
    
    this.currentTheme.set(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  }

  setupIntersectionObserver(): void {
    try {
      
      const options: IntersectionObserverInit = {
        root: null, 
        rootMargin: '0px 0px -10% 0px', 
        threshold: 0.1, 
      };

      
      const observerCallback: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, options);

      const sections = this.el.nativeElement.querySelectorAll('.scroll-reveal-section');

      sections.forEach((section: Element) => {
        observer.observe(section);
      });
      
    } catch (error) {
      console.error('Error al configurar IntersectionObserver:', error);
    }
  }
}
