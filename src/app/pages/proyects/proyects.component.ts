import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Project {
    title: string;
    technologies: string[];
    description: string;
    features: string[];
    demoLink?: string;
    codeLink: string;
    hasDemo?: boolean;
}

@Component({
  selector: 'app-proyects',
  imports: [],
  templateUrl: './proyects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectsComponent { 

  projects = signal<Project[]>([
        {
            title: "Porfolio Interactivo",
            technologies: ["Angular", "TypeScript", "Tailwind CSS"],
            description: "Mi portfolio profesional creado para mostrar mis habilidades de frontend y diseño moderno.",
            features: [
                "Implementación de *Angular Signals* para gestión de estado reactivo.",
                "Diseño *fully responsive* y adaptable a dispositivos móviles utilizando Tailwind CSS.",
                "Arquitectura modular y código mantenible con TypeScript.",
                "Animaciones y transiciones CSS fluidas para una experiencia de usuario (UX) óptima.",
            ],
            demoLink: "",
            codeLink: "https://github.com/rubenalcarazg/mi-porfolio",
            hasDemo: true,
        },
        {
            title: "Proyecto Comunidad",
            technologies: ["JavaScript", "PHP", "MySQL","Bootstrap"],
            description: "Plataforma web dinámica para la gestión de usuarios, publicación de contenido y foro de discusiones, enfocada en la interacción comunitaria.",
            features: [
                "Autenticación de usuarios robusta gestionada con sesiones PHP.",
                "Gestión de base de datos relacional (MySQL) para persistencia de datos.",
                "Interfaz de usuario moderna y rápida gracias a Bootstrap y JavaScript Vanilla.",
                "Funcionalidades CRUD completas (Crear, Leer, Actualizar, Borrar) para publicaciones y perfiles.",
            ],
            demoLink: "",
            codeLink: "https://github.com/rubenalcarazg/Proyecto-Comunidad",
            hasDemo: false,
        },
        
        
    ]);
}
