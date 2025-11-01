import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = [
    { title: 'Angular Portfolio Website (Current Project)',
      tech: 'Angular 16, SCSS, Bootstrap 5',
      description: 'Built a fully responsive personal portfolio with professional layout, dark/light theme toggle, and mobile navigation support. Designed to showcase personal and technical projects in a clean, modern interface.',
      purpose: 'To establish a professional digital presence while refining modern front-end architecture practices and responsive UI/UX design.'
    },
    { title: 'Astrology Dashboard (In Progress)',
      tech: 'Flask, Ollama Models, JavaScript, HTML, CSS',
      description: 'Currently developing an AI-assisted astrology dashboard integrating real-time planetary data analysis and personalized life-cycle interpretation using Ollama models. Combines spiritual insight with modern computation to visualize astrological patterns interactively.',
      purpose: 'Designed to blend intuitive astrology with localized AI reasoning — transforming ancient cosmic principles into practical, data-driven self-awareness tools.'
    },
    { title: 'AI-Powered Multi-Tool Dashboard (In Progress)',
      tech: 'Flask, Ollama Models, JavaScript, HTML, CSS',
      description: 'Currently developing an intelligent multi-tool productivity dashboard integrating chat, summarization, and image-generation modules. Transitioning from API-based systems to local Ollama models to achieve self-hosted AI performance, privacy, and offline capability.',
      purpose: 'Exploring advanced local AI integration and modular backend design to enhance automation, creativity, and user efficiency in web environments.'
    },
    { title: 'Python CRUD & WordPress Portfolio Mentorship Demo',
      tech: 'Flask, SQLite, Bootstrap, WordPress',
      description: 'Developed as part of a 12-day mentorship program demonstrating CRUD application development in Flask and portfolio creation in WordPress. Covered full project setup, routing, database integration, and content management.',
      purpose: 'Created to guide students through foundational web development workflows and practical project delivery from backend to CMS.'
    },
    { title: 'WordPress Developer Portfolio',
      tech: 'WordPress, Elementor, Custom CSS, PHP',
      description: 'Designed a personal WordPress portfolio showcasing custom project sections, responsive layouts, and dynamic UI built with Elementor and custom CSS enhancements.',
      purpose: 'Aimed to refine front-end design skills and deliver client-ready sites with professional aesthetics and clean content presentation.'
    },
    { title: 'WordPress Business Landing Pages',
      tech: 'WordPress, Elementor, CSS',
      description: 'Built single-page business landing sites featuring a custom hero section, pricing table, and integrated contact form with full mobile responsiveness.',
      purpose: 'Focused on rapid UI development and content-driven design tailored for small business and service presentation.'
    },
    { title: 'Order Management System',
      tech: 'Flask, SQLite, Bootstrap, JavaScript',
      description: 'Developed a full CRUD-based order tracking application with dashboard interface, file uploads, and datetime fields. Designed a modular Flask structure for clean local development and PythonAnywhere deployment.',
      purpose: 'Built to solidify backend CRUD principles, data persistence, and deployment workflow.'
    },
  ];
}
