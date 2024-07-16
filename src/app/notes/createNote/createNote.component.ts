import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {createNote} from "../../services/notes";
import {FormsModule} from "@angular/forms";
import {INote} from "../../types/notes";
import {NgSelectModule} from "@ng-select/ng-select";
import {NoteFormComponent} from "../noteForm/noteForm.component";

@Component({
  selector: "create-note",
  standalone: true,
  imports: [
    FormsModule,
    NgSelectModule,
    NoteFormComponent
  ],
  templateUrl: './createNote.component.html',
  styleUrls: ['./createNote.component.scss', '../../app.component.scss']
})

export class CreateNoteComponent {
  constructor(private router: Router) {
  };

  //поскольку обычные функции при вызове из другого контекста имеют контекст места в котором они вызваны, мы должны использовать стрелочную функцию для доступа к текущему контексту
  save?: (note: INote) => void = (note): void => {
    createNote(note);
    this.router.navigate(['']).then();
  };
}
