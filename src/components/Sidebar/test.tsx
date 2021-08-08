import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Sidebar from ".";

describe("<Sidebar />", () => {
    it("should render menu closed / opened", () => {
        render(<Sidebar logo="Giovanny Fialho" />);

        expect(screen.getByText(/giovanny fialho/i)).toBeInTheDocument();
        expect(
            screen.getByText(/giovanny fialho/i).parentElement?.parentElement
        ).toHaveStyle({ width: "78px" });

        userEvent.click(screen.getByText(/giovanny fialho/i).parentElement);
        expect(
            screen.getByText(/giovanny fialho/i).parentElement?.parentElement
        ).toHaveStyle({ width: "250px" });
    });
});
