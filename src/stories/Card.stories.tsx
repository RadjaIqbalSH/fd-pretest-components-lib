import { Story } from '@storybook/react';
import { Card } from '@components';
import { ICard } from '@typings/Card';

export default {
  component: Card,
};

const Template: Story<ICard> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  keyIndex: '1',
  className: 'w-[198.4px]',
  data: {
    skinType: 'string',
    rate: 3.5,
    stars: 3,
    reviews: 10,
    productUrl:
      'https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg',
    productName: 'VAL BY VALERIE THOMAS',
    productDescription: 'Pure pressed blush',
    productColor: 'Neutral Rose',
  },
};
