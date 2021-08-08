import { Meta, Story } from "@storybook/react/types-6-0";

import ItemsMenu, { ItemsMenuProps } from ".";
import itemsMock from "./mock";

export default {
    title: "ItemsMenu",
    component: ItemsMenu
} as Meta;

export const Default: Story<ItemsMenuProps> = (args) => <ItemsMenu {...args} />;

Default.args = {
    items: itemsMock
};
