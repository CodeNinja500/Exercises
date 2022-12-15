import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-limit-backend',
  styleUrls: ['./limit-backend.component.scss'],
  templateUrl: './limit-backend.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LimitBackendComponent {
}
