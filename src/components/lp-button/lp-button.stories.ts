import { fn } from '@storybook/test';

export default {
  title: 'Components/LpButton',
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    onClick: {
      action: 'onClick',
    }
  },
  args: {
    onClick: fn()
  }
};

const Template = (args) => `<lp-button disabled="${args.disabled}">${args.label}</lp-button>`;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  disabled: false,
}

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
}
