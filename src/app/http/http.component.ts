import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {Response} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'app-http',
  templateUrl: 'http.component.html',
  styles: [],
  providers: [HttpService]
})
export class HttpComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData()
      .subscribe(
        (data: Response) => console.log(data)
      );
  }

}