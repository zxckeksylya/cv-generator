export const BUTTON_STORY_ARGS_TYPES = {
  disabled: {
    defaultValue: false,
    control: 'boolean',
    description: 'this field is responsible for disabling the button component',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  classNames: {
    defaultValue: '',
    control: 'text',
    description: 'this field is responsible for custom classes of the button component',
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
    description: 'this field is responsible for the type of the button component',
    table: {
      type: { summary: 'NzButtonType' },
      defaultValue: { summary: 'default' },
    },
  },
  behaviorType: {
    defaultValue: 'button',
    control: {
      type: 'select',
      options: ['button', 'reset', 'submit'],
    },
    description: 'this field is responsible for the behavior of the button component',
    table: {
      type: { summary: 'BehaviorType' },
      defaultValue: { summary: 'button' },
    },
  },
  buttonText: {
    defaultValue: '123',
    control: 'text',
    description: 'this field is responsible for the text contained in the button component',
  },
};
