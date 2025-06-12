import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CrTable} from "./components/cr-table/cr-table";

@Component({
  selector: 'app-root',
    imports: [ CrTable],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'test-codereview';
}
