import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-post-popup',
  templateUrl: './post-popup.component.html',
  styleUrl: './post-popup.component.css'
})
export class PostPopupComponent {

  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }

}
