import { Component, OnInit } from '@angular/core';

import TagsService from '../services/tags.service';

@Component({
  selector: 'tags-container',
  templateUrl: '../templates/tags.template.html'
})

export default class TagsComponent implements OnInit {
  tags: string[] = [];

  constructor(
    private tagsService: TagsService) {
  }

  getTags(): void {
    this.tagsService.getTags().then(tags => this.tags = tags);
  }

  add(tag: string): Promise<void> {
    tag = tag.trim();
    if (!tag || this.tags.includes(tag)) {
      return Promise.resolve();
    }

    return this.tagsService.create(tag).then(() => {
      this.tags.push(tag);
    });
  }

  delete(tag: string): Promise<void> {
    return this.tagsService.delete(tag).then(() => {
      this.tags = this.tags.filter(t => t !== tag);
    });
  }

  ngOnInit(): void {
    this.getTags();
  }
}
