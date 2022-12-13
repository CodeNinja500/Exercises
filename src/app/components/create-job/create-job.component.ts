import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, tap} from 'rxjs';
import {RoleModel} from '../../models/role.model';
import {JobsService} from '../../services/jobs.service';

@Component({
  selector: 'app-create-job',
  styleUrls: ['./create-job.component.scss'],
  templateUrl: './create-job.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateJobComponent {
  readonly tagList$: Observable<RoleModel[]> = this._jobsService.getAllJobTags().pipe(tap(tags => this.setJobTagsControls(tags)));

  readonly jobTagsForm: FormGroup = new FormGroup({})
  readonly jobForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    jobTags: this.jobTagsForm
  });

  constructor(private _jobsService: JobsService) {
  }

  onJobFormSubmitted(jobForm: FormGroup): void {
    this._jobsService.createJobPost({
      title: jobForm.value.title,
      description: jobForm.value.description,
      jobTagIds: Object.keys(this.jobTagsForm.value).reduce((acc: number[], curr: string) => {
        if (this.jobTagsForm.value[curr]) {
          return [...acc, +curr]
        } else {
          return acc
        }
      }, [])
    }).subscribe()
  }

  setJobTagsControls(jobTags: RoleModel[]): void {
    jobTags.forEach(tag => this.jobTagsForm.addControl(String(tag.id), new FormControl(false)))
  }
}
