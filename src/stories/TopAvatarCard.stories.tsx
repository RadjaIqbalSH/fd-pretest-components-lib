import { Story } from '@storybook/react';
import { TopAvatarCard } from '../components';
import { ITopAvatarCard } from '../typings/TopAvatarCard';

export default {
  component: TopAvatarCard,
};

const Template: Story<ITopAvatarCard> = (args) => <TopAvatarCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  keyIndex: '1',
  className: 'w-[198.4px]',
  data: {
    avatarUrl:
      'https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg',
    name: 'name',
    title: 'title',
    rate: 4,
    stars: 4,
    reviews: 10,
    productUrl:
      'https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg',
    productName: 'productName',
    productDescription: 'productDescription',
    productColor: 'productColor',
  },
};
