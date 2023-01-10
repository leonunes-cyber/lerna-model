import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Remodel } from './Remodel';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Remodel',
  component: Remodel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Remodel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Remodel> = (args) => <Remodel {... args}  />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: 'lala',
  bg: 'green'
};