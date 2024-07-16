import {convertFormDataToObject} from "../../services/utils";
import {FormsModule} from "@angular/forms";
import {IValue} from "../../types/select";
import {getTags} from "../../services/tags";
import {NgSelectModule} from "@ng-select/ng-select";
import {INote} from "../../types/notes";
import {Component, Input} from "@angular/core";

@Component({
  selector: "note-form",
  standalone: true,
  imports: [
    FormsModule,
    NgSelectModule
  ],
  templateUrl: './noteForm.component.html',
  styleUrls: ['../createNote/createNote.component.scss', '../../app.component.scss']
})

export class NoteFormComponent {
  // импорт пропсов
  @Input() note?: INote;
  @Input({required: true}) saveNote?: (note: INote) => void;

  tags?: IValue[];

  selected?: IValue[];

  //как useEffect[] инициализация
  ngOnInit() {
    this.tags = getTags().map(tag => ({label: tag.name, value: tag.id}))

    //отображение выбранных тегов в заметке
    if (this.note) {
      this.selected = this.tags?.filter((tag) => this.note?.tag_ids?.indexOf(tag.value) !== -1)
    }
  }

  submit(event: SubmitEvent) {
    event.preventDefault();
    //типизируем target: HTMLFormElement потомучто formData принимает только HTMLFormElement (event.target имеет обобщенную типизацию)
    // const target: HTMLFormElement = <HTMLFormElement>event.target;
    // создаем экземпляр класса с данными из формы
    const data = new FormData(event.target as HTMLFormElement);
    const tempNote = convertFormDataToObject<INote>(data);
    //записываем в ключ tag_ids массив выбранных тегов
    tempNote.tag_ids = this.selected?.map(tag => tag.value);
    //note - старые данные, tempNote - новые данные. нам нужно это сравнение для корректной работы saveNote, которая найдет нужный id и перезапишет данные
    if (this.note?.id) {
      tempNote.id = this.note.id;
    } else {
      tempNote.id = Date.now().toString();
    }
    if (this.saveNote) this.saveNote(tempNote);
  }

  //при каждом измененении в селекторе, этот колбэк передает измененные данные селектора в selected, и в selected данные обновляются
  itemSelect(event: IValue[]) {
    this.selected = event;
  }

}
