import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public navCtr: NavController, public platform:Platform) {
    this.initializeApp()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.navCtr.navigateRoot(["/"]);
    })
  }
}
