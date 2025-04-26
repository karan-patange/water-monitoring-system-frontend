import { Component, Inject } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-usage-modal',
  templateUrl: './usage-modal.component.html',
  styleUrls: ['./usage-modal.component.css']
})
export class UsageModalComponent {

  constructor(private adminService: AdminServiceService) {}

  // Correcting the type for 'total' in the response
  viewTotalUsage(householdId: number) {
    this.adminService.getTotalUsage(householdId).subscribe({
      next: (total: number) => {  // Explicitly typing 'total' as 'number'
        alert(`Total water usage: ${total} liters`);
      },
      error: (err) => {
        console.error("Error fetching total usage", err);
        alert("Failed to fetch total usage");
      }
    });
  }
}
