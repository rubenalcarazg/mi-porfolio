// import { Component, signal, WritableSignal, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NgClass } from '@angular/common';

// // Define la interfaz de los mensajes para una estructura clara
// interface ChatMessage {
//   sender: 'start' | 'end';
//   image: string;
//   name: string;
//   text: string;
// }

// const IMG_ENTREVISTADOR = 'assets/images/entrevistador.jpg';
// const IMG_PERFIL = 'assets/images/perfil.png';

// @Component({
//   selector: 'app-chat',
//   standalone: true,
//   imports: [CommonModule, NgClass], // Asegúrate de importar NgClass
//   templateUrl: './chat.component.html',
//   styleUrl: './chat.component.css'
// })
// export class ChatComponent implements AfterViewInit {
//   // Array de todos los mensajes
//   private allMessages: ChatMessage[] = [
//     { sender: 'start', image: IMG_ENTREVISTADOR, name: 'Entrevistador', text: '¿Quién es Rubén Alcaraz?'},
//     { sender: 'end', image: IMG_PERFIL, name: 'Rubén', text: 'Soy un Desarrollador Full Stack apasionado por las tecnologias front'},
//     { sender: 'start', image: IMG_ENTREVISTADOR, name: 'Entrevistador', text: '¿Cómo aplicas tu creatividad en el desarrollo web?'},
//     { sender: 'end', image: IMG_PERFIL, name: 'Rubén', text: 'Utilizo mi creatividad para crear recursos innovadores al transformar la funcionalidad estándar en experiencias de usuario únicas. Me encanta seguir aprendiendo y mejorar como profesional dia a dia.'},
//     { sender: 'start', image: IMG_ENTREVISTADOR, name: 'Entrevistador', text: '¿Qué es lo que más te motiva a trabajar en un equipo y de qué manera consideras que tu trabajo como desarrollador contribuye directamente al crecimiento de una empresa?'},
//     { sender: 'end', image: IMG_PERFIL, name: 'Rubén', text: 'Lo que más me motiva es trabajar en equipo, donde colaborar crea soluciones más fuertes e ingeniosas. Quiero formar parte de un equipo para diseñar y programar soluciones que ayuden al crecimiento de la empresa mejorando la eficiencia interna o la experiencia del cliente.'},
//   ];

//   // Señal para gestionar los mensajes visibles
//   public visibleMessages: WritableSignal<ChatMessage[]> = signal([]);

//   @ViewChild('sentinela') private sentinela!: ElementRef;
  
//   private messageIndex = 0;
//   private isGenerating = false;

//   constructor() {}

//   ngAfterViewInit(): void {
//     const observer = new IntersectionObserver(entries => {
//       // ✅ Si el sentinela está visible y la generación no ha comenzado
//       if (entries[0].isIntersecting && !this.isGenerating) {
//         this.startConversation();
//       }
//     });
//     observer.observe(this.sentinela.nativeElement);
//   }

//   private startConversation(): void {
//     if (this.isGenerating) {
//       return;
//     }
//     this.isGenerating = true;
    
//     const intervalId = setInterval(() => {
//       if (this.messageIndex >= this.allMessages.length) {
//         clearInterval(intervalId); // ✅ Detiene el intervalo cuando se muestran todos los mensajes
//         this.isGenerating = false;
//         return;
//       }
      
//       const nextMessage = this.allMessages[this.messageIndex];
//       this.visibleMessages.update(messages => [...messages, nextMessage]);
//       this.messageIndex++;
//     }, 1000); // ✅ Retraso de 1000 ms (1 segundo) entre cada mensaje
//   }
  
// }

import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

const IMG_ENTREVISTADOR = 'assets/images/entrevistador.jpg';
const IMG_PERFIL = 'assets/images/perfil.png';

interface ChatMessage {
  sender: 'start' | 'end';
  image: string;
  name: string;
  text: string;
}

@Component({
  selector: 'app-chat',
  imports: [NgClass],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: ChatMessage[] = [
    { sender: 'start', image: IMG_ENTREVISTADOR, name: 'Entrevistador', text: '¿Quién es Rubén Alcaraz?' },
    { sender: 'end', image: IMG_PERFIL, name: 'Rubén', text: 'Soy un Desarrollador Full Stack apasionado por las tecnologías front' },
    { sender: 'start', image: IMG_ENTREVISTADOR, name: 'Entrevistador', text: '¿Cómo aplicas tu creatividad en el desarrollo web?' },
    { sender: 'end', image: IMG_PERFIL, name: 'Rubén', text: 'Utilizo mi creatividad para crear recursos innovadores al transformar la funcionalidad estándar en experiencias de usuario únicas. Me encanta seguir aprendiendo y mejorar como profesional día a día.' },
    { sender: 'start', image: IMG_ENTREVISTADOR, name: 'Entrevistador', text: '¿Qué es lo que más te motiva a trabajar en un equipo y de qué manera consideras que tu trabajo como desarrollador contribuye directamente al crecimiento de una empresa?' },
    { sender: 'end', image: IMG_PERFIL, name: 'Rubén', text: 'Lo que más me motiva es trabajar en equipo, donde colaborar crea soluciones más fuertes e ingeniosas. Quiero formar parte de un equipo para diseñar y programar soluciones que ayuden al crecimiento de la empresa mejorando la eficiencia interna o la experiencia del cliente.' }
  ];

  visibleMessages: boolean[] = Array(this.messages.length).fill(false);
  private hasStarted = false;

  @HostListener('window:scroll', [])
  onScroll() {
    const element = document.getElementById('conversation');
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible && !this.hasStarted) {
      this.hasStarted = true;
      this.showMessages();
    }
  }

  private showMessages() {
    this.messages.forEach((_, index) => {
      setTimeout(() => {
        this.visibleMessages[index] = true;
      }, index * 1000); // 1 segundo entre mensajes
    });
  }
}