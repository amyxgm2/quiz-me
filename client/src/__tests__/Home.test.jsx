import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders homepage heading and begin button", () => {
    render(<App />);

    const heading = screen.getByText(
        /your guided path to programming enlightenment/i
    );
    expect(heading).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /begin journey/i });
    expect(button).toBeInTheDocument();
});
