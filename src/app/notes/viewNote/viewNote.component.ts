import {Component} from "@angular/core";
import {INote} from "../../types/notes";
import {ActivatedRoute, Router} from "@angular/router";
import {getNote, saveNote} from "../../services/notes";
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {NoteFormComponent} from "../noteForm/noteForm.component";

@Component({
  selector: "view-note",
  standalone: true,
  imports: [
    FormsModule,
    NgSelectModule,
    NoteFormComponent
  ],
  templateUrl: './viewNote.component.html',
  styleUrls: ['../createNote/createNote.component.scss', '../../app.component.scss']
})

export class ViewNoteComponent {
  note?: INote;

  constructor(public router: Router, route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.note = getNote(params["id"]);
    });
  }

  //поскольку обычные функции при вызове из другого контекста имеют контекст места в котором они вызваны, мы должны использовать стрелочную функцию для доступа к текущему контексту
  save?: (note: INote) => void = (note): void => {
    saveNote(note);
    this.router.navigate(['']).then();
  };
}
