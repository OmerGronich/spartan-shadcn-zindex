import { Component } from '@angular/core';
import { DialogPreviewComponent } from './dialog/dialog';
import { TooltipDemo } from './shadcn/TooltipDemo';
import { AngularReactModule } from '@bubblydoo/angular-react';

@Component({
  selector: 'app-root',
  imports: [DialogPreviewComponent, AngularReactModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  TooltipDemo = TooltipDemo;
}
