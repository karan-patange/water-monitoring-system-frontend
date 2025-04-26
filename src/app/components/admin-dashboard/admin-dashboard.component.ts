import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { UsageModalComponent } from '../usage-modal/usage-modal.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  households: any[] = [];
  selectedUsage: any[] | null = null;
  selectedHouseholdId: number | null = null;

  constructor(private adminService: AdminServiceService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchAllHouseholds();
  }

  fetchAllHouseholds(): void {
    this.adminService.getAllHouseholds().subscribe(data => {
      this.households = data;
    });
  }

  openUsageModal(householdId: number): void {
    this.dialog.open(UsageModalComponent, {
      data: { householdId }
    });
  }

  viewUsage(householdId: number): void {
    this.selectedHouseholdId = householdId;
    this.adminService.getHouseholdUsage(householdId).subscribe(data => {
      this.selectedUsage = data;
    });
  }

  viewTotalUsage(householdId: number): void {
    this.adminService.getTotalUsage(householdId).subscribe({
      next: (total: number) => {
        alert(`Total water usage: ${total} liters`);
      },
      error: (err) => {
        console.error("Error fetching total usage", err);
        alert("Failed to fetch total usage");
      }
    });
  }

  deleteHousehold(householdId: number): void {
    if (confirm('Are you sure you want to delete this household?')) {
      this.adminService.deleteHousehold(householdId).subscribe({
        next: () => {
          alert('Household deleted successfully!');
          this.fetchAllHouseholds(); // Refresh the list after deletion
        },
        error: (err) => {
          console.error("Error deleting household", err);
          alert('Failed to delete household');
        }
      });
    }
  }
}
