import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';
  public isCollapsed = true;
  public isCollapsedProductType = true;
  public isCollapsedPrice = true;
  public isCollapsedCollection = true;
  public isCollapsedColor = true;
  public isCollapsedSize = true;

}
