import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-primary',
  templateUrl: './input-primary.component.html',
  styleUrls: ['./input-primary.component.scss']
})
export class InputPrimaryComponent {

  @Input()
  public label: string = '';

  @Input()
  public disabled: boolean = false;
}
