import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent {

  @Input()
  public title: string = '';

  @Input()
  public content: string = '';

  @Input()
  public badgeText: string = '';

  @Input()
  public badgeType: 'success' | 'warning' = 'success';

}
