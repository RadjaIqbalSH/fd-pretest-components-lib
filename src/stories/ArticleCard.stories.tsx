import { Story } from '@storybook/react';
import { ArticleCard } from '@components';
import { IArticleCard } from '@typings/ArticleCard';

export default {
  component: ArticleCard,
};

const Template: Story<IArticleCard> = (args) => <ArticleCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  keyIndex: '1',
  className: 'w-96 h-fit',
  data: {
    articleUrl:
      'https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg',
    title: 'title',
    userName: 'userName',
    publish: 'publish',
  },
};
