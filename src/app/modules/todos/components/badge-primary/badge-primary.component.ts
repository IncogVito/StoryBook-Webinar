import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge-primary',
  templateUrl: './badge-primary.component.html',
  styleUrls: ['./badge-primary.component.scss']
})
export class BadgePrimaryComponent {
  @Input()
  public label: string | null = '';

  @Input()
  public type?: 'success' | 'warn' | 'error' = 'success';


}
