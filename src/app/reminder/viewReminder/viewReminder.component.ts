import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {IReminder} from "../../types/reminder";
import {getReminder, saveReminder} from "../../services/reminder";
import {ReminderFormComponent} from "../reminderForm/reminderForm.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "view-reminder",
  standalone: true,
  imports: [
    FormsModule,
    ReminderFormComponent
  ],
  templateUrl: './viewReminder.component.html',
  styleUrls: ['../../notes/createNote/createNote.component.scss', '../../app.component.scss']
})

export class ViewReminderComponent {

  reminder?: IReminder;

  constructor(private router: Router, route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.reminder = getReminder(params["id"]);
    });
  }

  //поскольку обычные функции при вызове из другого контекста имеют контекст места в котором они вызваны, мы должны использовать стрелочную функцию для доступа к текущему контексту
  save?: (reminder: IReminder) => void = (reminder): void => {
    saveReminder(reminder);
    this.router.navigate(['/reminder']).then();
  };

}
