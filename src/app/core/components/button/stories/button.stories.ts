import { ButtonComponent } from '../button.component';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BUTTON_STORY_ARGS_TYPES } from './button.story-args-types';

export default {
  title: 'Common/Button',
  excludeStories: /.*Data$/,
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, CommonModule, RouterTestingModule, NzButtonModule],
    }),
  ],
  argTypes: BUTTON_STORY_ARGS_TYPES,
} as Meta;

const Template: Story<ButtonComponent> = (args) => ({
  props: { ...args },
  template: `<app-button [disabled]="disabled" [type]="type" [classNames]="classNames" [behaviorType]="behaviorType">{{buttonText}}</app-button>`,
});

export const DefaultButton = Template.bind({});
