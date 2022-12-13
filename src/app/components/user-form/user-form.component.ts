import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {filter, map, Observable} from 'rxjs';
import {RolesModel} from '../../models/roles.model';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-user-form',
  styleUrls: ['./user-form.component.scss'],
  templateUrl: './user-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent {
  readonly roles$: Observable<RolesModel[]> = this._usersService.getRoles();
  readonly userForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(5)]),
    role: new FormControl('', [Validators.required])
  });

  constructor(private _usersService: UsersService) {
  }

  onUserFormSubmitted(userForm: FormGroup): void {
    this._usersService.registerUser({
      email: userForm.value.email,
      roleId: userForm.value.role
    }).subscribe();
  }
}
