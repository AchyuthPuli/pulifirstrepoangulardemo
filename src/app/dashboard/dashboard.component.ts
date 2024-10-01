import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router){};

  navigateTo1(path: string) {
    this.router.navigate(['/task-manager']);
  }

  navigateTo2(path: string) {
    this.router.navigate(['/notes']);
  }  

  navigateTo3(path: string) {
    this.router.navigate(['/calender____']);
  }
}
