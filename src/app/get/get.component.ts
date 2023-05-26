import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit{
  elementi = [];

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>("https://MarcoDM.pythonanywhere.com").subscribe(
      res => {
        this.elementi = res;
      }
    );
  }
}
