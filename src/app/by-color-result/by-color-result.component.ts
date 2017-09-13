import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-color-result',
  templateUrl: './by-color-result.component.html',
  styleUrls: ['./by-color-result.component.scss']
})
export class ByColorResultComponent implements OnInit {
colorName;
attributes;
hexColor;
rgbColor;
cmykColor;
  constructor() { }

  ngOnInit() {
  }

}
