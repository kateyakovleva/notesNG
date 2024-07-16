import {ApplicationConfig} from '@angular/core';
import {provideRouter, Routes} from '@angular/router';
import {NotesListComponent} from './notesList/notesList.component';
import {CreateNoteComponent} from "./notes/createNote/createNote.component";
import {ViewNoteComponent} from "./notes/viewNote/viewNote.component";
import {CreateReminderComponent} from "./reminder/createReminder/createReminder.component";
import {ViewReminderComponent} from "./reminder/viewReminder/viewReminder.component";
import {ViewTagComponent} from "./tags/viewNote/viewTag.component";
import {CreateTagComponent} from "./tags/createTag/createTag.component";
import {NoteComponent} from "./contentNotes/note.component";
import {ReminderComponent} from "./contentReminder/reminder.component";
import {TagComponent} from "./contentTags/tag.component";


const itemRoutes: Routes = [
  {path: "", component: NoteComponent},
  {path: "reminder", component: ReminderComponent},
  {path: "tags", component: TagComponent}
];

const appRoutes: Routes = [
  {path: "", component: NotesListComponent, children: itemRoutes},
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
