import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Logo from ".";

describe("<Logo />", () => {
    it("should render menu closed", () => {
        render(<Logo logo="Giovanny Logo" />);

        expect(screen.getByText(/giovanny logo/i)).toBeInTheDocument();
        expect(screen.getByText(/giovanny logo/i)).toHaveStyle({ opacity: 0 });
    });

    it("should render menu opened", () => {
        render(<Logo logo="Giovanny logo" />);

        expect(screen.getByText(/giovanny logo/i)).toBeInTheDocument();
        expect(screen.getByText(/giovanny logo/i)).toHaveStyle({ opacity: 0 });

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        userEvent.click(screen.getByText(/giovanny logo/i).parentElement!);

        expect(screen.getByText(/giovanny logo/i)).toHaveStyle({ opacity: 1 });
    });
});
