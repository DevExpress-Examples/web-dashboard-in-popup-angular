import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DxDashboardControlModule } from 'devexpress-dashboard-angular';
import { DxButtonModule, DxPopupModule } from 'devextreme-angular';

interface DashboardInfo {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
	RouterOutlet, 
	DxDashboardControlModule,
	DxPopupModule,
	DxButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'Support Traffic';
  isPopupVisible : boolean = false;
  dashboardId : string = 'support';
  store : DashboardInfo[] = [
    {"id": "support", "name": "Support Traffic"},
    {"id": "products", "name": "Product Details"},
  ];

  showDashboardInPopup(storeItem: DashboardInfo){
    this.isPopupVisible = true; 
    this.dashboardId = storeItem.id; 
    this.title = storeItem.name
  }
}
