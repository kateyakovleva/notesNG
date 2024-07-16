import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {TagFormComponent} from "../tagForm/tagForm.component";
import {ITag} from "../../types/tags";
import {createTag} from "../../services/tags";

@Component({
  selector: "app-notes",
  standalone: true,
  imports: [
    FormsModule,
    TagFormComponent
  ],
  templateUrl: './createTag.component.html',
  styleUrls: ['../../notes/createNote/createNote.component.scss', '../../app.component.scss']
})

export class CreateTagComponent {
  constructor(private router: Router) {
  }

  save?: (tag: ITag) => void = (tag): void => {
    createTag(tag);
    this.router.navigate(['/tags']).then();
  };
}
