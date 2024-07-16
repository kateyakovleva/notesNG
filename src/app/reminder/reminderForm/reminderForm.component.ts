import {convertFormDataToObject} from "../../services/utils";
import {FormsModule} from "@angular/forms";
import {IValue} from "../../types/select";
import {NgSelectModule} from "@ng-select/ng-select";
import {Component, Input} from "@angular/core";
import {IReminder} from "../../types/reminder";
import {getNotes} from "../../services/notes";

@Component({
  selector: "reminder-form",
  standalone: true,
  imports: [
    FormsModule,
    NgSelectModule
  ],
  templateUrl: './reminderForm.component.html',
  styleUrls: ['../../notes/createNote/createNote.component.scss', '../../app.component.scss']
})

export class ReminderFormComponent {
  // импорт пропсов
  @Input() reminder?: IReminder;
  @Input({required: true}) saveReminder?: (reminder: IReminder) => void;

  notes?: IValue[];

  selected?: IValue;

  //как useEffect[] инициализация
  ngOnInit() {
    this.notes = getNotes().map(note => {
      return {label: note.heading, value: note.id}
    })

    if (this.reminder && this.reminder.note_id) {
      this.selected = this.notes.find(note => note.value === this.reminder?.note_id)
    } else if (this.notes) this.selected = this.notes[0]
  }

  submit(event: SubmitEvent) {
    event.preventDefault();
    const target: HTMLFormElement = <HTMLFormElement>event.target;
    const data = new FormData(target);
    const tempReminder = convertFormDataToObject<IReminder>(data);
    if (this.reminder?.id) {
      tempReminder.id = this.reminder.id;
    } else {
      tempReminder.id = Date.now().toString();
    }
    tempReminder.note_id = this.selected?.value;

    if (this.saveReminder) this.saveReminder(tempReminder);
  }

  itemSelect(value: IValue) {
    this.selected = value;
  }
}
