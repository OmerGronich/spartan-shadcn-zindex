import { Component } from '@angular/core';
import { DialogPreviewComponent } from './dialog/dialog';
import { TooltipDemo } from './shadcn/TooltipDemo';
import { AngularReactModule } from '@bubblydoo/angular-react';
import { DialogDemo } from './shadcn/DialogDemo';

@Component({
  selector: 'app-root',
  imports: [DialogPreviewComponent, AngularReactModule],
  templateUrl: './app.component.html',
  host: {
    class: 'flex items-center justify-center size-full',
  },
})
export class AppComponent {
  TooltipDemo = TooltipDemo;
  DialogDemo = DialogDemo;
}
