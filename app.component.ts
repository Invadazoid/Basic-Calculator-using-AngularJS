import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  num1=0;
  num2=0;
  val=0;
  op="?";
  add()
  {
    this.op="+";
    this.val=this.num1+this.num2;
  }
  sub()
  {
    this.op="-";
    this.val=this.num1-this.num2;
  }
  mul()
  {
    this.op="*";
    this.val=this.num1*this.num2;
  }
  div()
  {
    this.op="/";
    this.val=this.num1/this.num2;
  }
  
}
