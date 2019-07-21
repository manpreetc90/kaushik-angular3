import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(svc: TestService) {
    svc.printToConsole('from inner module/Service');
  }

  ngOnInit() {
  }

}
