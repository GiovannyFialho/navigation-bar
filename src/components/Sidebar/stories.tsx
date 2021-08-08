import { Meta, Story } from "@storybook/react/types-6-0";

import Sidebar, { SidebarProps } from ".";
import itemsMock from "../ItemsMenu/mock";

export default {
    title: "Sidebar",
    component: Sidebar
} as Meta;

export const Default: Story<SidebarProps> = (args) => <Sidebar {...args} />;

Default.args = {
    logo: "Giovanny",
    items: itemsMock,
    profile: {
        img: "https://media-exp1.licdn.com/dms/image/C4D03AQE3LOUXlSOw7w/profile-displayphoto-shrink_800_800/0/1619556816216?e=1634169600&v=beta&t=bCWzEJ0_0CTsHyv2X84z0MlJvjxD2-eXWocGrsJbBf4",
        name: "Giovanny Fialho",
        job: "Desenvolvedor Frontend"
    }
};
