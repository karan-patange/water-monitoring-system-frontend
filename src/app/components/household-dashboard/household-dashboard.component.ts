import { Component } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-household-dashboard',
  templateUrl: './household-dashboard.component.html',
  styleUrls: ['./household-dashboard.component.css']
})
export class HouseholdDashboardComponent {
  // households: any;
  


  

  constructor(private service: AdminServiceService) {}

  // ngOnInit(): void {
  //   const userName = localStorage.getItem('userName'); // Get householdId from localStorage
  //   if (userName) {
  //     // Fetch water usage data using the householdId
  //     this.service.getHouseholdByUsername(userName).subscribe({
  //       next: (data) => {
  //         this.households = data;
  //       },
  //       error: (err) => {
  //         console.error('Error fetching water usage history', err);
  //       }
  //     });
  //   }
  // }

  logoutuser(){
    this.service.logout();

  }
  



  households: any;

ngOnInit(): void {
  const userName = localStorage.getItem('userName');
  console.log("UserName in LocalStorage: ", userName); // Add this line to check
  if (userName) {
    this.service.getHouseholdByUsername(userName).subscribe({
      next: (data) => {
        console.log("Household data fetched: ", data); // Add this line to check
        this.households = data;
      },
      error: (err) => {
        console.error('Error fetching household data', err);
      }
    });
  }
}

}
