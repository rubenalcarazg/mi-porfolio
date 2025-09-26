import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatComponent } from "./chat/chat.component";

@Component({
  selector: 'app-about-me',
  imports: [ChatComponent],
  templateUrl: './about-me.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent{
  
 }
