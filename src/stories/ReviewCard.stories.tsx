import { Story } from '@storybook/react';
import { ReviewCard } from '../components';
import { IReviewCard } from '../typings/ReviewCard';

export default {
  component: ReviewCard,
};

const Template: Story<IReviewCard> = (args) => <ReviewCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  keyIndex: '1',
  className: 'w-[300px] sm:w-[352px] h-fit',
  data: {
    avatarUrl:
      'https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg',
    name: 'name',
    title: 'title',
    productUrl:
      'https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg',
    productName: 'productName',
    productBrand: 'productBrand',
    stars: 4,
    publish: 'publish',
    productDescription: 'productDescription',
  },
};
