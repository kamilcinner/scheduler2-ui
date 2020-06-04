import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ActivityService } from '@app/activity/_services'

@Component({
  selector: 'app-activity-all-confirm-delete',
  templateUrl: './activity-all-confirm-delete.component.html',
  styleUrls: ['./activity-all-confirm-delete.component.css']
})
export class ActivityAllConfirmDeleteComponent implements OnInit {
  loading = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private activityService: ActivityService
  ) { }

  ngOnInit(): void {
  }

  onReturn() {
    // Get return url.
    const returnUrl = this.route.snapshot.queryParams.returnUrl || '/'
    this.router.navigate([returnUrl]).then(() => console.log('Aborted delete.'))
  }

  onDelete() {
    this.loading = true
    this.activityService.deleteAll().subscribe(
      () => this.router.navigate(['/']).then(
        () => console.log(`Deleted all Activities.`)
    ))
  }

}
