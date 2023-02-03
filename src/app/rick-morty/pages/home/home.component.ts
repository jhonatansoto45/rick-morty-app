import { Component, OnInit } from '@angular/core';
import { ImagenPhoto } from '../../interface/rickmorty.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [],
})
export class HomeComponent implements OnInit {
  listPartnes: ImagenPhoto[] = [
    {
      nombre: 'hbo1',
      alt: 'HBO'
    },
    {
      nombre: 'cartoon',
      alt: 'Cartoon Network'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
