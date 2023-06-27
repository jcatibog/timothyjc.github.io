import { Component } from '@angular/core';

interface Education {
  credential: string,
  program: string,
  school: string,
  endDate: Date
}

interface Certification {
  credential: string,
  title: string,
  awardedOn: Date,
}

interface Experience {
  title: string,
  company: string,
  startDate: Date,
  endDate: Date,
  description?: string,
}

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  education: Education[] = [
    {
      credential: 'Honours Baccalaureate Degree',
      program: 'Computer Science',
      school: 'Sheridan College',
      endDate: new Date("2022-12-16")
    },
    {
      credential: 'Ontario College Advanced Diploma',
      program: 'Computer Programming & Analysis',
      school: 'Seneca College',
      endDate: new Date("2011-04-15")
    },
    {
      credential: 'Ontario Secondary School Diploma',
      program: '',
      school: 'Pope John Paul II Catholic Secondary School',
      endDate: new Date("2007-06-29")
    },
  ];

  experiences: Experience[] = [
    {
      title: 'DevOps Engineer',
      company: 'Bell Canada',
      startDate: new Date('2020-01-06'),
      endDate: new Date('2020-08-28'),
    },
    {
      title: 'Software Engineer',
      company: 'Yes Lifecycle Marketing',
      startDate: new Date('2016-02-22'),
      endDate: new Date('2018-01-05'),
    },
    {
      title: 'Web Developer',
      company: 'CDS Global Canada',
      startDate: new Date('2011-07-13'),
      endDate: new Date('2016-02-19'),
    },
    {
      title: 'Web Developer (Freelance)',
      company: 'Mediaks Digital Solutions',
      startDate: new Date('2010-06-08'),
      endDate: new Date('2011-09-16'),
    },
  ];

  certifications: Certification[] = [
    {
      credential: "Sheridan Board Undergraduate Certificate",
      title: "Creativity and Creative Problem Solving",
      awardedOn: new Date("2022-12-16")
    },
  ];
}
