import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {RoleModel} from '../../models/role.model';
import {JobsService} from '../../services/jobs.service';

@Component({
  selector: 'app-ex-nine-three',
  styleUrls: ['./ex-nine-three.component.scss'],
  templateUrl: './ex-nine-three.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExNineThreeComponent {
  readonly jobTags$: Observable<RoleModel[]> = this._jobsService.getAllJobTags().pipe(tap(roles => this.setJobTagsControls(roles)));

  readonly jobPostsForm: FormGroup = new FormGroup({})
  readonly employeeForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    jobPosts: this.jobPostsForm
  });

  constructor(private _jobsService: JobsService) {
  }

  onEmployeeFormSubmitted(employeeForm: FormGroup): void {
    this._jobsService.createJobPost({
      title: employeeForm.value.title,
      description: employeeForm.value.description,
      jobTagIds: Object.keys(this.jobPostsForm.value).reduce((acc:number[],curr:string)=>{
        if(this.jobPostsForm.value[curr])
          return [...acc,+curr]
        else
          return acc
      },[])
    }).subscribe()
  }

  setJobTagsControls(roles: RoleModel[]): void {
    roles.forEach(role => this.jobPostsForm.addControl(String(role.id), new FormControl(false)))
  }
}
