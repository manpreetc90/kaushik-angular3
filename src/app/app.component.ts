import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private svc: TestService, private http: HttpClient) {
    this.svc.printToConsole('Got the service!!');
  }

  ngOnInit() {
    // tslint:disable-next-line: prefer-const
    let obs = this.http.get('https://api.github.com/users/manpreetc90');
    obs.subscribe((response) => console.log(response));
  }
}
