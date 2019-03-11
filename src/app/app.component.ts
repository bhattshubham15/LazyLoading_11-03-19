import { Component, OnInit, HostListener } from '@angular/core';
import {  MatSpinner } from 'angular/MatSpinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lazyloading';
  colors  = new Array(50);
  afterLoader = false;
  firstContent  = true;
  loader  = false;
  @HostListener('window:scroll',  ['$event']) LoaderFunction(event: any) {
    setTimeout(() => {
if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
this.firstContent = false;
this.loader = true;
setTimeout(() => {
this.loader = false;
this.afterLoader = true;
}, 1000);
}
}, 2000);
    // ar1 = [
    //   { name: 'Shubham', id: 1 },
    //   { name: 'Varun', id: 2 },
    //   { name: 'Qwerty', id: 3 },
    //   { name: 'foo', id: 4 },
    //   { name: 'John', id: 5 },
    //   { name: 'Other', id: 6 } ];

  }

}
