import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatusTextComponent } from "../../components/common/status-text/status-text.component";

@Component({
  selector: 'app-hero',
  imports: [StatusTextComponent],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent { }
