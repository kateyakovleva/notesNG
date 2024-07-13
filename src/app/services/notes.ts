import {INote} from "../types/notes";
import {get, post} from "./storageApi";

export const getNotes = (): INote[] => {
  return get('noteList') || [];
}

export const getNote = (id: string) => {
  return getNotes().find(note => note.id === id)
}

export const saveNote = (note: INote) => {
  const notes = getNotes();
 notes.forEach((_note, index) => {
    if (_note.id === note.id) {
      notes[index] = note;
    }
  })

  post('noteList', notes);
}

export const createNote = (note: INote): INote => {
  note.id = Date.now().toString();

  const notes = getNotes();
  notes.push(note)
  post('noteList', notes);

  return note;
}
