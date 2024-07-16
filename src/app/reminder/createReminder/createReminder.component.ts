import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {ReminderFormComponent} from "../reminderForm/reminderForm.component";
import {IReminder} from "../../types/reminder";
import {createReminder} from "../../services/reminder";
import {Router} from "@angular/router";

@Component({
  selector: "create-reminder",
  standalone: true,
  imports: [
    FormsModule,
    NgSelectModule,
    ReminderFormComponent
  ],
  templateUrl: './createReminder.component.html',
  styleUrls: ['../../notes/createNote/createNote.component.scss', '../../app.component.scss']
})

export class CreateReminderComponent {
  constructor(private router: Router) {
  };

  save?: (reminder: IReminder) => void = (reminder): void => {
    createReminder(reminder);
    this.router.navigate(['/reminder']).then();
  };
}
