import {Component} from "@angular/core";
import {INote} from "../types/notes";
import {ActivatedRoute, Router} from "@angular/router";
import {createNote, getNote, saveNote} from "../services/notes";
import {convertFormDataToObject} from "../services/utils";
import {FormsModule} from "@angular/forms";

@Component({
  selector: "app-viewNote",
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './viewNote.component.html',
  styleUrls: ['../createNote/createNote.component.scss', '../app.component.scss']
})

export class ViewNoteComponent {

  note?: INote;

  constructor(private router: Router, route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.note = getNote(params["id"]);
    });
  }

  submit(event: SubmitEvent) {
    event.preventDefault();
    //типизируем target: HTMLFormElement потомучто formData принимает только HTMLFormElement (event.target имеет обобщенную типизацию)
    // const target: HTMLFormElement = <HTMLFormElement>event.target;
    // создаем экземпляр класса с данными из формы
    const data = new FormData(event.target as HTMLFormElement);
    const tempNote = convertFormDataToObject<INote>(data);
    //note - старые данные, tempNote - новые данные. нам нужно это сравнение для корректной работы saveNote, которая найдет нужный id и перезапишет данные
    if(this.note?.id) tempNote.id = this.note.id;
    saveNote(tempNote);

    this.router.navigate(['']).then();
  }

}
