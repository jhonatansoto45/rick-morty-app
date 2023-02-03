import { Component, OnInit } from '@angular/core';
import {
  ImagenPhoto,
  TablaPremiacion,
} from '../../interface/rickmorty.interface';

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
      alt: 'HBO',
    },
    {
      nombre: 'cartoon',
      alt: 'Cartoon Network',
    },
  ];

  listPremios: TablaPremiacion[] = [
    {
      anio: 2015,
      premio: 'BTVA Voice Acting Awards',
      categoria:
        'Best Male Lead Vocal Performance in a Television Series — Comedy/Musical',
    },
    {
      anio: 2015,
      premio: 'IGN Awards',
      categoria: 'Best Animated Series',
    },
    {
      anio: 2015,
      premio: "IGN People's Choice Award",
      categoria: 'Best Animated Series',
    },
    {
      anio: 2017,
      premio: 'IGN Awards',
      categoria: 'Best Animated Series',
    },
    {
      anio: 2017,
      premio: 'IGN Awards',
      categoria: 'Best Comedic TV Performance',
    },
    {
      anio: 2018,
      premio: "Critics' Choice Television Awards",
      categoria: 'Best Animated Series',
    },
    {
      anio: 2018,
      premio: 'Annie Awards',
      categoria:
        'Best General Audience Animated Television/Broadcast Production',
    },
    {
      anio: 2018,
      premio: 'Annie Awards',
      categoria:
        'Outstanding Achievement for Writing in an Animated Television/Broadcast Production',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
