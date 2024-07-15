import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {convertFormDataToObject} from "../services/utils";
import {FormsModule} from "@angular/forms";
import {IReminder} from "../types/reminder";
import {getReminder, saveReminder} from "../services/reminder";

@Component({
  selector: "app-viewNote",
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './viewReminder.component.html',
  styleUrls: ['../createReminder/createReminder.component.scss', '../app.component.scss']
})

export class ViewReminderComponent {

  reminder?: IReminder;

  constructor(private router: Router, route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.reminder = getReminder(params["id"]);
    });
  }

  submit(event: SubmitEvent) {
    event.preventDefault();
    //типизируем target: HTMLFormElement потомучто formData принимает только HTMLFormElement (event.target имеет обобщенную типизацию)
    // const target: HTMLFormElement = <HTMLFormElement>event.target;
    // создаем экземпляр класса с данными из формы
    const data = new FormData(event.target as HTMLFormElement);
    const tempReminder = convertFormDataToObject<IReminder>(data);
    //note - старые данные, tempNote - новые данные. нам нужно это сравнение для корректной работы saveNote, которая найдет нужный id и перезапишет данные
    if(this.reminder?.id) tempReminder.id = this.reminder.id;
    saveReminder(tempReminder);

    this.router.navigate(['']).then();
  }

}
