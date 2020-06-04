import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '@app/_services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onDeleteAllActivities() {
    this.router.navigate(['/activities/delete'], { queryParams: { returnUrl: this.router.url } })
      .then(() => console.log('Proceeding to delete all Activities confirmation view.'))
  }

  onGetActivitiesFromPollub() {
    this.router.navigate(['/activities/pollub'], { queryParams: { returnUrl: this.router.url } })
      .then(() => console.log('Proceeding to get Activities from Pollub view.'))
  }

  get authenticated(): boolean {
    return this.authenticationService.authenticated
  }
}
