export const BUTTON_STORY_ARGS_TYPES = {
  disabled: {
    defaultValue: false,
    control: 'boolean',
    description: '123',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  classNames: {
    defaultValue: '',
    control: 'text',
    description: '123',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
    },
  },
  type: {
    defaultValue: 'default',
    control: {
      type: 'select',
      options: ['primary', 'default', 'dashed', 'link', 'text'],
    },
    description: '123',
    table: {
      type: { summary: 'NzButtonType' },
      defaultValue: { summary: 'default' },
    },
  },
  behaviorType: {
    defaultValue: 'button',
    control: 'text',
    description: '123',
    table: {
      type: { summary: 'BehaviorType' },
      defaultValue: { summary: 'button' },
    },
  },
  buttonText: {
    defaultValue: '123',
    control: 'text',
    description: '123',
  },
};
