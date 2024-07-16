import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {getNotes, removeNote} from "../services/notes";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {getReminderByNoteId} from "../services/reminder";
import {ITag} from "../types/tags";
import {getTags} from "../services/tags";

@Component({
  selector: "app-contentNotes",
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss', '../app.component.scss']
})

export class NoteComponent {

  removeField(id: string) {
    removeNote(id)
  };

  protected readonly getNotes = getNotes;

  tags?: ITag[];

  ngOnInit() {
    this.tags = getTags()
  }

  getReminderDate(note_id?: string) {
    if (note_id) return getReminderByNoteId(note_id)?.date;
    return ''
  };

  getTags(tag_ids?: string[]): string {
    if (!tag_ids) return '';
    return this.tags?.filter(tag => tag_ids.indexOf(tag.id) !== -1).map(tag => tag.name).join(', ') || '';
  }
}
