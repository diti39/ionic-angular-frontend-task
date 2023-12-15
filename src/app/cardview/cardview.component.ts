import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatBadgeModule, MatButtonModule,IonicModule,]
})
export class CardviewComponent  implements OnInit {
  constructor(private modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        title: 'My Modal Title',
      },
      cssClass: 'my-custom-modal', // Add a custom CSS class
    });
  
    await modal.present();
  }

  value = 0;

  increment() {
    this.value++;
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
    }
  }

  ngOnInit() {}

}
