import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {createNote} from "../services/notes";
import {convertFormDataToObject} from "../services/utils";
import {FormsModule} from "@angular/forms";

@Component({
  selector: "app-createNote",
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './createNote.component.html',
  styleUrls: ['./createNote.component.scss', '../app.component.scss']
})

export class CreateNoteComponent {
  constructor(private router: Router) {}

  submit(event: SubmitEvent) {
    event.preventDefault();
    const target: HTMLFormElement = <HTMLFormElement>event.target;
    const data = new FormData(target);
    const tempNote = convertFormDataToObject(data);

    const note = createNote(tempNote);

    this.router.navigate(['']).then();
  }

}