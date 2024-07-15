import { ApplicationConfig } from '@angular/core';
import {provideRouter, Routes} from '@angular/router';
import {NotesListComponent} from './notesList/notesList.component';
import {CreateNoteComponent} from "./createNote/createNote.component";
import {ViewNoteComponent} from "./viewNote/viewNote.component";
import {CreateReminderComponent} from "./createReminder/createReminder.component";
import {ViewReminderComponent} from "./viewReminder/viewReminder.component";
import {ViewTagComponent} from "./viewTag/viewTag.component";
import {CreateTagComponent} from "./createTag/createTag.component";

const appRoutes: Routes = [
  {path: "", component: NotesListComponent},
  {path: "create_note", component: CreateNoteComponent},
  {path: "view_notes/:id", component: ViewNoteComponent},
  {path: "create_reminder", component: CreateReminderComponent},
  {path: "view_reminder/:id", component: ViewReminderComponent},
  {path: "create_tag", component: CreateTagComponent},
  {path: "view_tags/:id", component: ViewTagComponent},
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};
