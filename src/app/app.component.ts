import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loader-library';
  log=()=>{console.log('a');}
  log1=()=>{console.log('master');}
}
