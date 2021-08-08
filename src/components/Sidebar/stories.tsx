import { Meta, Story } from "@storybook/react/types-6-0";

import Sidebar, { SidebarProps } from ".";
import itemsMock from "../ItemsMenu/mock";

export default {
    title: "Sidebar",
    component: Sidebar
} as Meta;

export const Default: Story<SidebarProps> = (args) => <Sidebar {...args} />;

Default.args = {
    logo: "GF",
    items: itemsMock
};
