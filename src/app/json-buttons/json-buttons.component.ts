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
}
