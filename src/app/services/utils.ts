import {INote} from "../types/notes";

export const convertFormDataToObject = (data: FormData):INote => {
  let note: Partial<INote> = {};

  data.forEach((value, key ) => {
    note[ key as(keyof INote) ] = value as INote[keyof INote];
  })

  return note as INote;
}
