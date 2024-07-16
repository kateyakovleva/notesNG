import {Component} from "@angular/core";
import {NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {NoteComponent} from "../contentNotes/note.component";

@Component({
  selector: "app-notesList",
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgTemplateOutlet,
    RouterLink,
    NoteComponent,
    NgComponentOutlet,
    RouterOutlet
  ],
  templateUrl: './notesList.component.html',
  styleUrls: ['./notesList.component.scss', '../app.component.scss']
})


export class NotesListComponent {
}






