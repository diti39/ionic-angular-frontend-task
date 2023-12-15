import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class ModalComponent  implements OnInit {


  constructor(private modalController: ModalController, ) {
   
  }

  dismissModal() {
    this.modalController.dismiss();
  }
  ngOnInit() {}

}
