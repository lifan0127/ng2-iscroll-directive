/// <reference path="../typings.d.ts" />
import { Component } from '@angular/core';
import { Iscroll } from './iscroll.directive';

@Component({
  moduleId: module.id,
  selector: 'ng2-iscroll-directive-app',
  templateUrl: 'ng2-iscroll-directive.component.html',
  styleUrls: ['ng2-iscroll-directive.component.css'],
  directives: [
    Iscroll
  ]
})
export class Ng2IscrollDirectiveAppComponent {
  title = 'ng2-iscroll-directive works!';
}
