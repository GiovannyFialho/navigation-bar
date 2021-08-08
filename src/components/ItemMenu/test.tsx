import { render, screen } from "@testing-library/react";
import { Dashboard } from "@styled-icons/boxicons-solid/Dashboard";

import ItemMenu, { ItemMenuProps } from ".";

const props: ItemMenuProps = {
    link: "#",
    icon: <Dashboard size={18} />,
    title: "Dashboard"
};

describe("<ItemMenu />", () => {
    it("should render item menu", () => {
        render(<ItemMenu {...props} />);

        expect(
            screen.getByRole("link", { name: /Dashboard/i })
        ).toBeInTheDocument();
    });
});
