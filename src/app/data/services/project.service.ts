import {Injectable} from '@angular/core';
import {Tag} from "@data/schemas/tag";
import {Project} from "@data/schemas/project";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [
    {
      name: 'ScamX',
      description: "Marketplace where users can buy and sell items. Made with PHP.",
      url: "https://github.com/darkhappy/scamx",
      tags: [
        {name: 'Web'},
        {name: 'PHP'},
      ]
    },
    {
      name: 'Simple Roguelite',
      description: "A simple roguelite game made with PHP, using Deltarune assets.",
      url: "https://github.com/darkhappy/roguelite",
      tags: [
        {name: 'Game'},
        {name: 'Web'},
        {name: 'PHP'},
      ]
    },
    {
      name: 'Toontown Rewritten Dashboard',
      description: "An electron application which shows you the current status of Toontown Rewritten.",
      url: "https://github.com/darkhappy/ttrinfo-app",
      tags: [
        {name: 'Desktop'},
        {name: 'JavaScript / TypeScript'},
      ]
    },
    {
      name: 'Flight Simulator',
      description: "A C# application to simulate planes flying between airports, with a Star Wars theme.",
      url: "https://github.com/darkhappy/flightsim",
      tags: [
        {name: 'Desktop'},
        {name: 'C#'},
      ]
    },
    {
      name: "Chess",
      description: "A simple chess game made with C#.",
      url: "https://github.com/darkhappy/chess",
      tags: [
        {name: 'Desktop'},
        {name: 'C#'},
      ]
    },
    {
      name: "Centre d'Aide en Informatique",
      description: "Website used for my college's IT support center.",
      url: "https://github.com/darkhappy/projet-soutien",
      tags: [
        {name: 'Web'},
        {name: 'React'},
      ]
    },
  ];

  constructor() {
  }

  getProjects(): Observable<Project[]> {
    return of(this.projects)
  }

}
