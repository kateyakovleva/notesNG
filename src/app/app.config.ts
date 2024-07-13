import { ApplicationConfig } from '@angular/core';
import {provideRouter, Routes} from '@angular/router';
import {NotesListComponent} from './notesList/notesList.component';
import {CreateNoteComponent} from "./createNote/createNote.component";

const appRoutes: Routes = [
  {path: "", component: NotesListComponent},
  {path: "create_note", component: CreateNoteComponent}
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};
