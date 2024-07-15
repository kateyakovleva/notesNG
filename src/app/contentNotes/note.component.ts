import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {getNotes, removeNote} from "../services/notes";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {getReminderByNoteId} from "../services/reminder";

@Component({
  selector: "app-contentNotes",
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss', '../app.component.scss']
})

export class NoteComponent {

  removeField(id: string) {
    removeNote(id)
  };

  protected readonly getNotes = getNotes;

  getReminderDate(note_id?: string) {
    if(note_id) return getReminderByNoteId(note_id)?.date;
    return ''
  };
}
