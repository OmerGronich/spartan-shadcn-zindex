import { Component } from '@angular/core';
import { lucidePlus } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnTooltipContentDirective } from '@spartan-ng/brain/tooltip';
import {
  HlmTooltipComponent,
  HlmTooltipTriggerDirective,
} from '@spartan-ng/ui-tooltip-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'spartan-tooltip-preview',
  standalone: true,
  imports: [
    HlmTooltipComponent,
    HlmTooltipTriggerDirective,
    BrnTooltipContentDirective,
    HlmButtonDirective,
    HlmIconDirective,
    NgIcon,
  ],
  providers: [provideIcons({ lucidePlus })],
  template: `
    <hlm-tooltip>
      <button
        hlmTooltipTrigger
        aria-describedby="Hello world"
        hlmBtn
        variant="outline"
      >
        Angular tooltip
      </button>
      <span *brnTooltipContent class="flex items-center">
        Add to library
        <ng-icon hlm class="ml-2" size="sm" name="lucidePlus" />
      </span>
    </hlm-tooltip>
  `,
})
export class TooltipPreviewComponent {}
