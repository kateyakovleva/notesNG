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
  styleUrls: ['./createNote.component.scss', '../app.component.scss']
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
    const target: HTMLFormElement = <HTMLFormElement>event.target;
    const data = new FormData(target);
    const tempNote = convertFormDataToObject(data);

    const note = createNote(tempNote);

    this.router.navigate(['']).then();
  }

}
