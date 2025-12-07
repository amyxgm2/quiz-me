import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("navigates to quiz page when Begin Journey is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole("button", { name: /begin journey/i });
    await user.click(button);

    // This assumes your Quiz page has some visible text like "Quiz"
    const quizText = screen.getByText(/quiz/i);
    expect(quizText).toBeInTheDocument();
});

