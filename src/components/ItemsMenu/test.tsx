import { render, screen } from "@testing-library/react";
import { Dashboard } from "@styled-icons/boxicons-solid/Dashboard";

import ItemsMenu, { ItemsMenuProps } from ".";

const props: ItemsMenuProps = {
    link: "#",
    icon: <Dashboard size={18} />,
    title: "Dashboard"
};

describe("<ItemsMenu />", () => {
    it("should render item menu", () => {
        render(<ItemsMenu {...props} />);

        expect(
            screen.getByRole("link", { name: /Dashboard/i })
        ).toBeInTheDocument();
    });
});
