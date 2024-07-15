import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {getReminders} from "../services/reminder";
import {getNote} from "../services/notes";

@Component({
  selector: "app-contentNotes",
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss', '../app.component.scss']
})

export class ReminderComponent {
  protected readonly getReminders = getReminders;

  getNoteHeading(id?: string) {
    if(id) return getNote(id)?.heading;
    return ''
  }
}