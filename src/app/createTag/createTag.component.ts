import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {createNote} from "../services/notes";
import {convertFormDataToObject} from "../services/utils";
import {FormsModule} from "@angular/forms";
import {ITag} from "../types/tags";
import {createTag} from "../services/tags";

@Component({
  selector: "app-createNote",
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './createTag.component.html',
  styleUrls: ['./createTag.component.scss', '../app.component.scss']
})

export class CreateTagComponent {
  constructor(private router: Router) {}

  submit(event: SubmitEvent) {
    event.preventDefault();
    const target: HTMLFormElement = <HTMLFormElement>event.target;
    const data = new FormData(target);
    const tempTag = convertFormDataToObject<ITag>(data);

    const tag = createTag(tempTag);

    this.router.navigate(['']).then();
  }

}
