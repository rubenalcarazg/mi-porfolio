
import { Component, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';

interface Message {
  sender: 'interviewer' | 'you'; // Manteniendo 'interviewer'/'you' para la lógica de visualización
  text: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-chat',
  imports: [NgClass],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
 
  interviewerAvatar     =  'assets/images/entrevistador.jpg';
  yourAvatar            =  'assets/images/perfil.png'; 
  isConversationStarted =   signal(false);
  visibleMessagesCount  =   signal(0);
  
  messages = signal<Message[]>([
    { sender: 'interviewer', text: '¿Quién es Rubén Alcaraz?', avatarUrl: this.interviewerAvatar },
    { sender: 'you', text: 'Soy un Desarrollador Full Stack apasionado por las tecnologías Front.', avatarUrl: this.yourAvatar },
    { sender: 'interviewer', text: '¿Cómo aplicas tu creatividad en el desarrollo web?', avatarUrl: this.interviewerAvatar },
    { sender: 'you', text: 'Creo recursos innovadores transformando funcionalidad estándar en experiencias de usuario únicas. Busco aprender y mejorar día a día.', avatarUrl: this.yourAvatar },
    { sender: 'interviewer', text: '¿Qué te motiva del trabajo en equipo y cómo contribuyes al crecimiento de la empresa?', avatarUrl: this.interviewerAvatar },
    { sender: 'you', text: 'Lo que más me motiva es trabajar en equipo, donde colaborar crea soluciones más fuertes e ingeniosas. Quiero formar parte de un equipo para diseñar y programar soluciones que ayuden al crecimiento de la empresa.', avatarUrl: this.yourAvatar },
  ]);

  
  private readonly TRIGGER_SCROLL_POSITION = 10; 

  ngOnInit(): void {
    this.checkScroll(); 
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll(): void {
    if (!this.isConversationStarted() && window.scrollY >= this.TRIGGER_SCROLL_POSITION) {
      this.isConversationStarted.set(true);
      this.showNextMessage();
    }
  }

  private showNextMessage(): void {
    const totalMessages = this.messages().length;
    const currentCount = this.visibleMessagesCount();

    if (currentCount < totalMessages) {
      this.visibleMessagesCount.update(count => count + 1);

      // Scroll automático del contenedor del chat al final
      setTimeout(() => {
        const chatContainer = document.getElementById('chat-container');
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      }, 0); 


      setTimeout(() => this.showNextMessage(), 1500);
    }
  }
}