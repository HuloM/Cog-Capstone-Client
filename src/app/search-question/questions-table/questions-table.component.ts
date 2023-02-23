import { Component } from '@angular/core';

@Component({
  selector: 'app-questions-table',
  templateUrl: './questions-table.component.html',
  styleUrls: ['./questions-table.component.css']
})
export class QuestionsTableComponent {
  questions = [
    {
      id: 1,
      title: "How to create a new Angular project?",
      description: "I want to create a new Angular project. How do I do that?",
      topic: "Angular",
    },
    {
      id: 2,
      title: "How to create a new React project?",
      description: "I want to create a new React project. How do I do that?",
      topic: "React",
    },
  ]

}
