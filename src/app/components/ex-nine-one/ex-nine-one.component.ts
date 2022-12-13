import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import { RoleModel } from '../../models/role.model';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-ex-nine-one',
  styleUrls: ['./ex-nine-one.component.scss'],
  templateUrl: './ex-nine-one.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExNineOneComponent {
  readonly genders: Observable<string[]> = of(['male','female','other'])
  readonly jobTags$: Observable<RoleModel[]> = this._jobsService.getAllJobTags();
  readonly userForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.email]),
    roleId: new FormControl('',[Validators.required]),
    gender: new FormControl('',Validators.required)
  });

  constructor(private _jobsService: JobsService) {
  }

  onUserFormSubmitted(userForm: FormGroup): void {
  }
}
