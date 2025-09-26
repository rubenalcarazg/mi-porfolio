import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'status-text',
  imports: [],
  templateUrl: './status-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusTextComponent { 
  @Input() content = "Actualmente buscando trabajo"
}
