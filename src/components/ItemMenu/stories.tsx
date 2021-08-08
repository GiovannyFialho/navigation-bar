import { Meta, Story } from "@storybook/react/types-6-0";
import { Dashboard } from "@styled-icons/boxicons-solid/Dashboard";

import ItemMenu, { ItemMenuProps } from ".";

export default {
    title: "ItemMenu",
    component: ItemMenu
} as Meta;

export const Default: Story<ItemMenuProps> = (args) => <ItemMenu {...args} />;

Default.args = {
    link: "#",
    icon: <Dashboard size={18} />,
    title: "Dashboard"
};
