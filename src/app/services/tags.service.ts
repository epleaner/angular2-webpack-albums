import { Injectable } from '@angular/core';

const mockTags = [
  'Jazz',
  'Soul',
  'Folk'
];

@Injectable()
export default class TagsService {
  constructor() {
  }

  getTags(): Promise<string[]> {
    return Promise.resolve(mockTags);
  }

  create(tag: string): Promise<string> {
    return Promise.resolve(tag);
  }

  delete(tag: string): Promise<string> {
    return Promise.resolve();
  }
}
