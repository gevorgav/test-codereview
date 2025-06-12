import {Component, Input} from '@angular/core';
import {HoverDirective} from "../../directive/hover";

@Component({
  selector: 'app-cr-table',
  imports: [
    HoverDirective
  ],
  templateUrl: './cr-table.html',
  styleUrl: './cr-table.scss'
})
export class CrTable {

  name = 'Angular';

  columns: Column[] = ['name', 'age', 'email', "role"] as any;

  setHeader(title: any,index: any) {
    return title + index;
  }

  setData(data: any, title: any) {
    if(!title) return "Hi"
    return data;
  }

  @Input({required: true}) data!: TableData[];

}
export type TableData = {
  id: string,
  name: string,
  age: number,
  company: string,
  email: string,
  phone: string,
  address: string,
}

type Column = keyof TableData

