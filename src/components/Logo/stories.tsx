import { Meta, Story } from "@storybook/react/types-6-0";

import Logo, { LogoProps } from ".";

export default {
    title: "Logo",
    component: Logo,
    parameters: {
        backgrounds: {
            default: "dark"
        }
    }
} as Meta;

export const Default: Story<LogoProps> = (args) => (
    <div style={{ maxWidth: 100 }}>
        <Logo {...args} />
    </div>
);

Default.args = {
    logo: "Giovanny Logo"
};
