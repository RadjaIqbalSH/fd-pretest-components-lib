import { Story } from '@storybook/react';
import { Brands } from '../components';
import { IBrands } from '../typings/Brands';

export default {
  component: Brands,
};

const Template: Story<IBrands> = (args) => <Brands {...args} />;

export const Default = Template.bind({});
Default.args = {
  brandSrc:
    'https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg',
};
