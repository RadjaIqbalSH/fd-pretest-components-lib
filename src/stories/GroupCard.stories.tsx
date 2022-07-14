import { Story } from '@storybook/react';
import { GroupCard } from '../components';
import { IGroupCard } from '../typings/GroupCard';

export default {
  component: GroupCard,
};

const Template: Story<IGroupCard> = (args) => <GroupCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  keyIndex: '1',
  className: 'w-[248px] h-fit',
  data: {
    avatarUrl:
      'https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg',
    title: 'Embrace The Curl',
    description: 'May our curl pop and never stop!',
  },
};
