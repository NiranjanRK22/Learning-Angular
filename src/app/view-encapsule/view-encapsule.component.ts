import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsule',
  templateUrl: './view-encapsule.component.html',
  styleUrls: ['./view-encapsule.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
