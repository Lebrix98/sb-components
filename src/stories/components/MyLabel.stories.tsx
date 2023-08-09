import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyLabel from "../../components/MyLabel";


export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: {type: 'color'} }
    },
    tags: ['autodocs'],
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});

Basic.args = {
    label: 'Basic Label',
    size: 'normal',
    allCaps: false,
    color: 'primary'
}

export const AllCaps = Template.bind({});

AllCaps.args = {
    label: 'All Caps Label',
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({});

Secondary.args = {
    label: 'Secondary Label',
    size: 'h2',
    color: 'secondary'
}

export const Tertiary = Template.bind({});

Tertiary.args = {
    label: 'Secondary Label',
    size: 'h2',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({});

CustomFontColor.args = {
    size: 'h1',
    fontColor: '#d7d7d7'
}
