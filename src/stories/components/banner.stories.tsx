import { Story } from '@storybook/react';
import React from 'react';
import { EasyStatus } from '../../components';
import { BannerProps } from '../../components/banner';

export default {
    title: 'Components/Banner',
    component: EasyStatus.Banner
};

const Template: Story<BannerProps> = (args) => <EasyStatus.Banner {...args} />;

export const Error = Template.bind({});
Error.args = {
    apiKey: 'sohfidshfohsdo',
    variant: 'ERROR'
};
