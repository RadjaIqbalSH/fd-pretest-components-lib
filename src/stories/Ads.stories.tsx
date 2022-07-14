import { Story } from '@storybook/react';
import { Ads } from '@components';
import { IAds } from '@typings/Ads';

export default {
  component: Ads,
  label: 'Labelz',
};

const Template: Story<IAds> = (args) => <Ads {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  label2: 'Label 2',
  className: 'mx-auto max-w-[970px] h-[250px]',
};
