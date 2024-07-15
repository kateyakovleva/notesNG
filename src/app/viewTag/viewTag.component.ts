import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {convertFormDataToObject} from "../services/utils";
import {FormsModule} from "@angular/forms";
import {ITag} from "../types/tags";
import {getTag, saveTag} from "../services/tags";

@Component({
  selector: "app-viewNote",
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './viewTag.component.html',
  styleUrls: ['../createNote/createNote.component.scss', '../app.component.scss']
})

export class ViewTagComponent {

  tag?: ITag;

  constructor(private router: Router, route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.tag = getTag(params["id"]);
    });
  }

  submit(event: SubmitEvent) {
    event.preventDefault();
    //типизируем target: HTMLFormElement потомучто formData принимает только HTMLFormElement (event.target имеет обобщенную типизацию)
    // const target: HTMLFormElement = <HTMLFormElement>event.target;
    // создаем экземпляр класса с данными из формы
    const data = new FormData(event.target as HTMLFormElement);
    const tempTag = convertFormDataToObject<ITag>(data);
    //note - старые данные, tempNote - новые данные. нам нужно это сравнение для корректной работы saveNote, которая найдет нужный id и перезапишет данные
    if(this.tag?.id) tempTag.id = this.tag.id;
    saveTag(tempTag);

    this.router.navigate(['']).then();
  }

}
