import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {convertFormDataToObject} from "../services/utils";
import {FormsModule} from "@angular/forms";
import {createReminder} from "../services/reminder";
import {IReminder} from "../types/reminder";
import {getNotes} from "../services/notes";
import {NgSelectModule} from "@ng-select/ng-select";

@Component({
  selector: "app-createNote",
  standalone: true,
  imports: [
    FormsModule,
    NgSelectModule
  ],
  templateUrl: './createReminder.component.html',
  styleUrls: ['./createReminder.component.scss', '../app.component.scss']
})

export class CreateReminderComponent {
  constructor(private router: Router) {
    this.getAllNotes = getNotes().map(note => {
      return {label: note.heading, value: note.id}
    })

    if(this.getAllNotes) this.selected = this.getAllNotes[0]
  }

   getAllNotes?: {label: string, value:string}[]

  selected?: {label: string, value:string}



  submit(event: SubmitEvent) {
    event.preventDefault();
    const target: HTMLFormElement = <HTMLFormElement>event.target;
    const data = new FormData(target);
    const tempReminder = convertFormDataToObject<IReminder>(data);
    tempReminder.note_id = this.selected?.value;

    const reminder = createReminder(tempReminder);

    this.router.navigate(['']).then();
  }

}
