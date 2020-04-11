import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement(): void {
    let x = document.querySelector("#section-tours");
    if (x){
        x.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
    // $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }


}
