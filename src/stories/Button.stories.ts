// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  size: 'large',
};

Primary.argTypes = {
  size: {
    control: {
      type: 'radio',
      labels: {
        '': 'None',   // 👈 this empty string is the problem
        'small': 'Small',
        'medium': 'Medium',
        'large': 'Large',
      },
      options: ['', 'small', 'medium', 'large']
    }
  }
}