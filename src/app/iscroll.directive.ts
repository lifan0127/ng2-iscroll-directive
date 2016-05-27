/// <reference path="../typings.d.ts" />
import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import * as IScroll from 'iscroll';

@Directive({
  selector: '[iscroll]'
})
export class Iscroll implements AfterViewInit {
  iscroll: IScroll
  constructor(
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit() {
    let iscrollOptions: any = {
      mouseWheel: true,
      scrollbars: true
    };
    this.iscroll = new IScroll(this.elementRef.nativeElement, iscrollOptions);
  }
}
