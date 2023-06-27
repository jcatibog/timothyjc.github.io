import { Component } from '@angular/core';
import { faAngular, faAws, faDocker, faGithub, faJava, faJs, faLinkedin, faRust } from '@fortawesome/free-brands-svg-icons';
import { faDharmachakra } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition, faEnvelope } from '@fortawesome/free-regular-svg-icons'

interface Contact {
  icon: IconDefinition;
  href: string;
}

interface Skill {
  name: string;
  icon: IconDefinition;
  bgColor: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faLinkedIn = faLinkedin;

  title = 'Intermediate DevOps / Software Engineer';

  contactInfo: Contact[] = [
    { icon: faLinkedin, href: 'https://www.linkedin.com/in/tjcatibog' },
    { icon: faGithub, href: 'https://github.com/tjcatibog' },
  ];

  skills: Skill[] = [
    { name: 'AWS', icon: faAws, bgColor: 'bg-orange-500' },
    { name: 'Java', icon: faJava, bgColor: 'bg-sky-700' },
    { name: 'Rust', icon: faRust, bgColor: 'bg-orange-900' },
    { name: 'Angular', icon: faAngular, bgColor: 'bg-red-700' },
    { name: 'Typescript', icon: faJs, bgColor: 'bg-blue-500' },
    { name: 'Docker', icon: faDocker, bgColor: 'bg-blue-800' },
    { name: 'Kubernetes', icon: faDharmachakra, bgColor: 'bg-blue-600' },
  ];
}
