import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  id:number = 0;
  nome:string = "";

  constructor(private http:HttpClient){}

  clickk(f: NgForm) {
    this.http.post(`https://MarcoDM.pythonanywhere.com`, {"id": this.id, "nome": this.nome}).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
