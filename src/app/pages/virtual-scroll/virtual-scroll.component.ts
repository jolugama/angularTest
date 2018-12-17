import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
declare const require: any;

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})

export class VirtualScrollComponent implements OnInit {
  emojiList: string[];
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  constructor() {
    this.emojiList = require('../../data/emoji.json');
  }

  ngOnInit() {
  }

  irInicio() {
    this.viewport.scrollToIndex(0);
  }

  irFinal() {
    this.viewport.scrollToIndex(this.emojiList.length);
  }

}
