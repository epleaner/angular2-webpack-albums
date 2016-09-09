import {
  inject,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import AlbumsComponent from '../components/albums.component';
import AlbumsService from '../services/albums.service';

describe('Tags', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AlbumsService,
      AlbumsComponent
    ]
  }));

  beforeEach(inject([AlbumsComponent], (albumsComponent: AlbumsComponent) => {
    this.albumsComponent = albumsComponent;
  }));
});
