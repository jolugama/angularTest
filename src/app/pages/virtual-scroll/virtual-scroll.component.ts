import { Component, OnInit } from '@angular/core';
declare const require: any;

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})

export class VirtualScrollComponent implements OnInit {
  emojiList: string[];


  constructor() {
    this.emojiList = require('../../data/emoji.json');
  }

  ngOnInit() {
  }

}
