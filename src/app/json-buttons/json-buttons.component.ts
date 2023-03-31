import { Component, Input } from '@angular/core';
import { CPHead, Courses } from '../cpinterfaces';

@Component({
  selector: 'app-json-buttons',
  templateUrl: './json-buttons.component.html',
  styleUrls: ['./json-buttons.component.css']
})
export class JsonButtonsComponent {
  @Input() courses!: Courses[];
  @Input() cphead!: CPHead;

  outarea!: string;

  displayTerm(term: number) {
    this.outarea = 
    `
      <h4>Term ${term} Classes: </h4>
      <table>
        <tr>
          <th>Class</th>
          <th>Description</th>
        </tr>

    `;

    for (let x of this.courses) {
      if (x.term === term) {
        this.outarea += 
        `
          <tr>
            <td>${x.class}</td>
            <td>${x.description}</td>
          </tr>
        `;
      }
    }
  }
}
