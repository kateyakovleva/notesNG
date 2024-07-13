import {Component} from "@angular/core";
import {NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ContentComponent} from "../content/content.component";

@Component({
  selector: "app-notesList",
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgTemplateOutlet,
    RouterLink,
    ContentComponent
  ],
  templateUrl: './notesList.component.html',
  styleUrls: ['./notesList.component.scss', '../app.component.scss']
})

export class NotesListComponent {

  activeTab = 0;

  tabs = [
    { title: 'Заметки', content: 'Content of Tab 1' },
    { title: 'Напоминания', content: 'Content of Tab 2' },
    { title: 'Теги', content: 'Content of Tab 3' }
  ];

  setActiveTab(i: number) {
    this.activeTab = i;
  }

}






