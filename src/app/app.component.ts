import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loader:boolean=true;
  constructor(){}

  title = 'ecomm';

  ngOnInit(): void {
    setTimeout(() => {
      this.loader=false;

    }, 2000);
  }

}
