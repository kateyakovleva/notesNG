import {get, post} from "./storageApi";
import {ITag} from "../types/tags";

export const getTags = (): ITag[] => {
  return get('tagList') || [];
}

export const getTag = (id: string) => {
  return getTags().find(tag => tag.id === id)
}

export const saveTag = (tag: ITag) => {
  const tags = getTags();
 tags.forEach((_tag, index) => {
    if (_tag.id === tag.id) {
      tags[index] = tag;
    }
  })

  post('tagList', tags);
}

export const removeTag = (id: string) => {
  let tags = getTags();
  tags = tags.filter((_tag: ITag) => id !== _tag.id);

  post('tagList', tags);
}

export const createTag = (tag: ITag): ITag => {
  tag.id = Date.now().toString();

  const tags = getTags();
  tags.push(tag)
  post('tagList', tags);

  return tag;
}
