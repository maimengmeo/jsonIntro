import { Component, Input } from '@angular/core';
import { Courses, CPHead } from '../cpinterfaces';

@Component({
  selector: 'app-json-list',
  templateUrl: './json-list.component.html',
  styleUrls: ['./json-list.component.css']
})
export class JsonListComponent {
  @Input() courses!: Courses[];
  @Input() cphead!: CPHead;

  displayedColumns: string[] = ["term", "class", "description", "credit"]
}
