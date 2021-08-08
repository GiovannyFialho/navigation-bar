import { render, screen } from "@testing-library/react";

import Sidebar from ".";

describe("<Sidebar />", () => {
    it("should render component", () => {
        const { container } = render(<Sidebar />);

        expect(
            screen.getByRole("heading", { name: /Sidebar/i })
        ).toBeInTheDocument();
    });
});
