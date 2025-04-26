import { Component } from '@angular/core';

@Component({
  selector: 'app-household-dashboard',
  templateUrl: './household-dashboard.component.html',
  styleUrls: ['./household-dashboard.component.css']
})
export class HouseholdDashboardComponent {
  household = {
    ownerName: 'Karan'
  };
  
  dailyUsage = [
    { date: new Date(), litersUsed: 120 },
    { date: new Date('2025-04-23'), litersUsed: 150 }
  ];
  
  monthlyUsage = [
    { month: 'April 2025', totalLiters: 3700 },
    { month: 'March 2025', totalLiters: 4200 }
  ];
  
}
