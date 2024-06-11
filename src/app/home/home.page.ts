import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonTabs, IonTabBar, IonIcon, IonTabButton } from '@ionic/angular/standalone';
import { appsOutline, cartOutline, heartOutline, locateOutline } from 'ionicons/icons';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonTabButton, IonIcon, IonTabBar, IonTabs, IonFooter, IonHeader, IonToolbar, IonTitle, IonContent,IonFooter],
})
export class HomePage {
 apps=appsOutline
 location=locateOutline
 cart=cartOutline
 heart=heartOutline

  constructor() {}
}
