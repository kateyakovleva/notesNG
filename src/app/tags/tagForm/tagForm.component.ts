import {Component, Input} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {ITag} from "../../types/tags";
import {convertFormDataToObject} from "../../services/utils";

@Component({
  selector: "tag-form",
  standalone: true,
  imports: [
    FormsModule,
    NgSelectModule
  ],
  templateUrl: './tagForm.component.html',
  styleUrls: ['../../notes/createNote/createNote.component.scss', '../../app.component.scss']
})

export class TagFormComponent {
  @Input() tag?: ITag;
  @Input({required: true}) saveTag?: (tag: ITag) => void;

  submit(event: SubmitEvent) {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const tempTag = convertFormDataToObject<ITag>(data);
    if (this.tag?.id) {
      tempTag.id = this.tag?.id;
    } else {
      tempTag.id = Date.now().toString();
    }

    if (this.saveTag) this.saveTag(tempTag);
  }
}
