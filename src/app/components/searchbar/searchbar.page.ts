import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonSearchbar]
})
export class SearchbarPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log();
    
  }

}
