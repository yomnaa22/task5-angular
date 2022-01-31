import { Injectable } from '@angular/core';
import { Tag } from '../_models/tags.model';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  tags: Tag [] = [
    {id: 1, name: 'tag111'},
  
  ]

  constructor() { }
  
  getAllTags(): Tag[] {
    return this.tags.splice(0);
  }

  getCategoryById(id: number): Tag | undefined {
    return this.tags.find(tag => tag.id === id);
  }
}
