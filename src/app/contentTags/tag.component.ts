import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {getTags, removeTag} from "../services/tags";

@Component({
  selector: "app-contentNotes",
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss', '../app.component.scss']
})

export class TagComponent {

  removeField(id: string) {
    removeTag(id)
  };

  protected readonly getTags = getTags;
}
