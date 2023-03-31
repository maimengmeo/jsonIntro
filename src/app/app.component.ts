import { Component } from '@angular/core';
import { CPHead, Courses } from './cpinterfaces';  
import cpdata from '../assets/data/cp.json'; //cpdata is a variable, so no {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jsonIntro';

  cphead: CPHead = cpdata.ProgramData;
  courses: Courses[] = cpdata.courses;

}
