import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

@Component({
  selector: 'app-bg-effect',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bg-effect.component.html',
  styleUrls: ['./bg-effect.component.css'] 

})
export class BackgroundComponent implements OnInit {
  private readonly NUM_PARTICLES = 100;
  particles = signal<Particle[]>([]);

  ngOnInit() {
    this.generateParticles();
  }

  generateParticles(): void {
    const newParticles: Particle[] = [];
    for (let i = 0; i < this.NUM_PARTICLES; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 1,
        delay: Math.random() * 10,
        duration: Math.random() * 20 + 10,
      });
    }
    this.particles.set(newParticles);
  }

  getParticleStyles(p: Particle): string {
    return `
      width: ${p.size}px;
      height: ${p.size}px;
      top: ${p.y}vh;
      left: ${p.x}vw;
      animation-delay: -${p.delay}s;
      animation-duration: ${p.duration}s;
    `;
  }
}
