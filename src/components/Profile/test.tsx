import { render, screen } from "@testing-library/react";

import Profile, { ProfileProps } from ".";

const props: ProfileProps = {
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQE3LOUXlSOw7w/profile-displayphoto-shrink_800_800/0/1619556816216?e=1634169600&v=beta&t=bCWzEJ0_0CTsHyv2X84z0MlJvjxD2-eXWocGrsJbBf4",
    name: "Giovanny Fialho",
    job: "Desenvolvedor Frontend"
};

describe("<Profile />", () => {
    it("should render profile", () => {
        render(<Profile {...props} />);

        expect(
            screen.getByRole("img", { name: /giovanny fialho/i })
        ).toBeInTheDocument();

        expect(screen.getByText(/Desenvolvedor Frontend/i)).toBeInTheDocument();
    });
});
