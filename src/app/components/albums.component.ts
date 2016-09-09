import { Component, OnInit } from '@angular/core';

import AlbumsService from '../services/albums.service';
import Album from '../models/album';

@Component({
  selector: 'albums-container',
  templateUrl: '../templates/albums.template.html'
})

export default class TagsComponent implements OnInit {
  get currentAlbum(): Album {
    return this._currentAlbum;
  }

  set currentAlbum(value: Album) {
    this._currentAlbum = value;
  }
  private _currentAlbum: Album;

  constructor(
    private albumsService: AlbumsService) {
  }
}
