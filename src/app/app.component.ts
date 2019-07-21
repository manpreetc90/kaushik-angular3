import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private svc: TestService;
  constructor(svc: TestService) {
    this.svc = svc;
    svc.printToConsole('Got the service!!');
  }
}
