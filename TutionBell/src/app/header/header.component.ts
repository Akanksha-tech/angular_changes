import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent{
  isCollapsed = true;

  bgColor : string = '';
  toggleclicked=false;
  toggleClick(){
    this.toggleclicked=!this.toggleclicked;
    if(this.toggleclicked){
    this.bgColor = "white";
    }
    else{
    this.bgColor='';
    }
  }
}
