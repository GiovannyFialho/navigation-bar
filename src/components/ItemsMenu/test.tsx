import { render, screen } from "@testing-library/react";

import ItemsMenu from ".";
import itemsMock from "./mock";

describe("<ItemsMenu />", () => {
    it("should render items with item", () => {
        render(<ItemsMenu items={itemsMock} />);
    });
});
