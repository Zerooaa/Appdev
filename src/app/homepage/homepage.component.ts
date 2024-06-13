import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent {

  onMenuClick() {
    console.log('Menu clicked');
  }

  isPopupVisible = false;

  onAddPostClick() {
    this.isPopupVisible = true;
  }

  onPopupClose() {
    this.isPopupVisible = false;
  }

  onFilterClick() {
    console.log('Filter clicked');
  }

}
