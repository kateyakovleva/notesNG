import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {getNotes} from "../services/notes";
import {NgForOf} from "@angular/common";

@Component({
  selector: "app-content",
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss', '../app.component.scss']
})

export class ContentComponent {

  protected readonly getNotes = getNotes;

}
