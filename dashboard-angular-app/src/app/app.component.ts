import { Component } from '@angular/core';

interface DashboardInfo {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Support Traffic';
  isPopupVisible = false;
  dashboardId = 'support';
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
