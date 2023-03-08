import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  critere1: number = 50;
  critere2: number = 75;

  resetCritere1() {
    this.critere1 = 0;
    this.max100();
  }

  resetCritere2() {
    this.critere2 = 0;
    this.max100();
  }

  add5Critere1() {
    this.critere1 += 5;
    this.max100();
  }

  add5Critere2() {
    this.critere2 += 5;
    this.max100();
  }

  add10Critere1() {
    this.critere1 += 10;
    this.max100();
  }

  add10Critere2() {
    this.critere2 += 10;
    this.max100();
  }

  max100() {
    if (this.critere1 > 100) {
      this.critere1 = 100;
    }
    if (this.critere2 > 100) {
      this.critere2 = 100;
    }
  }

  minus10Critere2() {
    this.critere2 -= 10;
    this.max100();
  }
  minus10Critere1() {
    this.critere1 -= 10;
    this.max100();
  }

  minus5Critere2() {
    this.critere2 -= 5;
    this.max100();
  }
  minus5Critere1() {
    this.critere1 -= 5;
    this.max100();
  }

  getDate(): string {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
  }
}
