import { Component } from '@angular/core';
import {HttpComponent} from "./http/http.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HttpComponent]
})
export class AppComponent {
  title = 'app works!';
}
