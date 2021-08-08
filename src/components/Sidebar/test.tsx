import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Sidebar, { SidebarProps } from ".";
import itemsMock from "components/ItemsMenu/mock";

const props: SidebarProps = {
    logo: "Giovanny Fialho",
    items: itemsMock,
    profile: {
        img: "https://media-exp1.licdn.com/dms/image/C4D03AQE3LOUXlSOw7w/profile-displayphoto-shrink_800_800/0/1619556816216?e=1634169600&v=beta&t=bCWzEJ0_0CTsHyv2X84z0MlJvjxD2-eXWocGrsJbBf4",
        name: "Giovanny Fialho",
        job: "Desenvolvedor Frontend"
    }
};

describe("<Sidebar />", () => {
    it("should render sidebar with components", () => {
        render(<Sidebar {...props} />);
    });
});
