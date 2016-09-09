import {
  inject,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import TagsComponent from '../components/tags.component';
import TagsService from '../services/tags.service';

describe('Tags', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TagsService,
      TagsComponent
    ]
  }));

  beforeEach(inject([TagsComponent], (tagsComponent: TagsComponent) => {
    this.tagsComponent = tagsComponent;
  }));

  it('should add a tag', (done) => {
    let numberOfTags = this.tagsComponent.tags.length;

    this.tagsComponent.add('New tag').then(() => {
      expect(this.tagsComponent.tags.length).toEqual(numberOfTags + 1);
      expect(this.tagsComponent.tags).toContain('New tag');
      done();
    });
  });

  it('should remove a tag', (done) => {
    this.tagsComponent.tags = ['Tag 1', 'Tag 2'];
    let numberOfTags = this.tagsComponent.tags.length;

    this.tagsComponent.delete('Tag 1').then(() => {
      expect(this.tagsComponent.tags.length).toEqual(numberOfTags - 1);
      expect(this.tagsComponent.tags).not.toContain('Tag 1');
      done();
    });
  });

  it('should not add the same tag twice', (done) => {
    this.tagsComponent.tags = ['Tag 1', 'Tag 2'];
    let numberOfTags = this.tagsComponent.tags.length;

    this.tagsComponent.add('Tag 1').then(() => {
      expect(this.tagsComponent.tags.length).toEqual(numberOfTags);
      done();
    });
  });

});
