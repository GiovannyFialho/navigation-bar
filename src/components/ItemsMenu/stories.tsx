import { Meta, Story } from "@storybook/react/types-6-0";
import { Dashboard } from "@styled-icons/boxicons-solid/Dashboard";

import ItemsMenu, { ItemsMenuProps } from ".";

export default {
    title: "ItemsMenu",
    component: ItemsMenu
} as Meta;

export const Default: Story<ItemsMenuProps> = (args) => <ItemsMenu {...args} />;

Default.args = {
    link: "#",
    icon: <Dashboard size={18} />,
    title: "Dashboard"
};
