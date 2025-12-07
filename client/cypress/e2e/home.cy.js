describe("Quiz Me Homepage", () => {
    it("loads the homepage successfully", () => {
        cy.visit("http://localhost:5174");

        cy.contains("Your guided path to programming enlightenment");
        cy.contains("Begin Journey");
    });
});

describe("Quiz Navigation", () => {
    it("navigates to quiz page when button is clicked", () => {
        cy.visit("http://localhost:5173");

        cy.contains("Begin Journey").click();

        cy.url().should("include", "/quiz");

        cy.contains("Quiz"); // Your Quiz page must contain the word "Quiz"
    });
});

