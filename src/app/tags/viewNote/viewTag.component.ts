import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ITag} from "../../types/tags";
import {getTag, saveTag} from "../../services/tags";
import {TagFormComponent} from "../tagForm/tagForm.component";

@Component({
  selector: "app-viewNote",
  standalone: true,
  imports: [
    FormsModule,
    TagFormComponent
  ],
  templateUrl: './viewTag.component.html',
  styleUrls: ['../../notes/createNote/createNote.component.scss', '../../app.component.scss']
})

export class ViewTagComponent {

  tag?: ITag;

  constructor(private router: Router, route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.tag = getTag(params["id"]);
    });
  }

  //поскольку обычные функции при вызове из другого контекста имеют контекст места в котором они вызваны, мы должны использовать стрелочную функцию для доступа к текущему контексту
  save?: (tag: ITag) => void = (tag): void => {
    saveTag(tag);
    this.router.navigate(['/tags']).then();
  };
}
