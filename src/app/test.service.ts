import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  printToConsole(arg) {
    console.log(arg);
  }
}
