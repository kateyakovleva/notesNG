import {Component} from "@angular/core";
import {NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {RouterLink} from "@angular/router";
import {NoteComponent} from "../contentNotes/note.component";
import {ReminderComponent} from "../contentReminder/reminder.component";
import {TagComponent} from "../contentTags/tag.component";

@Component({
  selector: "app-notesList",
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgTemplateOutlet,
    RouterLink,
    NoteComponent,
    NgComponentOutlet
  ],
  templateUrl: './notesList.component.html',
  styleUrls: ['./notesList.component.scss', '../app.component.scss']
})

export class NotesListComponent {

  activeTab = 0;

  tabs = [
    { title: 'Заметки', content: NoteComponent },
    { title: 'Напоминания', content: ReminderComponent },
    { title: 'Теги', content: TagComponent }
  ];

  setActiveTab(i: number) {
    this.activeTab = i;
  }

}






