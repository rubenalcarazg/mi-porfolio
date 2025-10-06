import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface ContactItem {
  id: string;
  name: string;
  iconClass: string;
  linkHref: string;
  contentToCopy: string;
  typeClass: 'gmail' | 'linkedin' | 'github';
  hoverColor: string;
}

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent { 

  copiedItemId = signal<string | null>(null);

  contactItems: ContactItem[] = [
    {
      id: 'email',
      name: 'Email Profesional',
      iconClass: 'fas fa-envelope',
      linkHref: 'mailto:rubenalcarazg04@gmail.com',
      contentToCopy: 'rubenalcarazg04@gmail.com',
      typeClass: 'gmail',
      hoverColor: '#DB4437'
    },
    {
      id: 'linkedin',
      name: 'Mi Perfil LinkedIn',
      iconClass: 'fab fa-linkedin-in',
      linkHref: 'https://www.linkedin.com/in/rub%C3%A9n-alcaraz-gadea-b58b78219/',
      contentToCopy: 'https://www.linkedin.com/in/rub%C3%A9n-alcaraz-gadea-b58b78219/',
      typeClass: 'linkedin',
      hoverColor: '#0A66C2'
    },
    {
      id: 'github',
      name: 'Mi Repositorio GitHub',
      iconClass: 'fab fa-github',
      linkHref: 'https://github.com/rubenalcarazg',
      contentToCopy: 'https://github.com/rubenalcarazg',
      typeClass: 'github',
      hoverColor: '#171515'
    }
  ];

  copyToClipboard(text: string, id: string): void {
    
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    tempInput.style.position = 'absolute';
    tempInput.style.left = '-9999px'; 
    document.body.appendChild(tempInput);

    tempInput.select();
    
    try {
        // Ejecuta la copia usando el método de fallback
        const successful = document.execCommand('copy');
        
        if (successful) {
            this.copiedItemId.set(id);

            setTimeout(() => {
                this.copiedItemId.set(null);
            }, 1500);
        } else {
            console.error('Error: No se pudo copiar el texto usando execCommand.');
        }

    } catch (err) {
        console.error('Error al intentar copiar:', err);
    } finally {
        document.body.removeChild(tempInput);
    }
  }
}
