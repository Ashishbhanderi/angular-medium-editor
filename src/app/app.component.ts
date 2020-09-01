import { Component, VERSION } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import MediumEditor from 'medium-editor';
//var MediumEditor = require('medium-editor');

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  @ViewChild('medium') medium: ElementRef;

ngAfterViewInit() {
    const edit= this.medium.nativeElement;
    const editor = new MediumEditor(edit);
}
}
