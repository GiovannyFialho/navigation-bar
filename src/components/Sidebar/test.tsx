import { render, screen } from "@testing-library/react";

import Sidebar from ".";

describe("<Sidebar />", () => {
    it("should render component", () => {
        render(<Sidebar logo="Giovanny Logo" />);
    });
});
