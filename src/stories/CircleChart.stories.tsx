import { Story, Meta } from '@storybook/react';
import CircleChart, { CircleChartProps } from '../app/components/CircleChart';

export default {
  title: 'Example/CircleChart',
  component: CircleChart,
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100
      }
    }
  }
} as Meta;

const Template: Story<CircleChartProps> = (args) => <CircleChart {...args} />;

export const Default = Template.bind({})
Default.args = {
  progress: 80,
  size: 150
}

export const DefaultFilled = Template.bind({})
DefaultFilled.args = {
  progress: 45,
  size: 150,
  caption: 'internet',
  theme: 'primary',
  strokeWidth: 4
}