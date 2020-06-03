import { Component, OnInit } from '@angular/core'
import { ActivityService } from '@app/activity/_services'
import { Router } from '@angular/router'

@Component({
  selector: 'app-pollub',
  templateUrl: './pollub.component.html',
  styleUrls: ['./pollub.component.css']
})
export class PollubComponent implements OnInit {
  submitted = false

  constructor(
    private activityService: ActivityService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onProceedToPollub(): void {
    this.submitted = true
    this.activityService.addActivitiesFromPollub().subscribe(() => {
      this.router.navigate(['/activities']).then(r => console.log(r))
    })
  }


}
