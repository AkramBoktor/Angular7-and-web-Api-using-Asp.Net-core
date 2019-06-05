import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngulaewithaspCore';
  name = 'Akram Boktor';
  
 currentDate = new Date();

  colors = ['Red', 'Green', 'Blue', 'White'];

  isLog: boolean = false;
  logState = 'Login';

  changeLog() {

    this.isLog = !this.isLog;

    this.logState = this.isLog ? 'Logout' : 'login';
  }

  myFunc() {
  alert('You click Button');
}

onChange() {

  alert('color change');
}
}
