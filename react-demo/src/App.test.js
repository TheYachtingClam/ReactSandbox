import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
    render(<App />);
    for (const linkElement of screen.getAllByText(/Welcome/i)) {
        expect(linkElement).toBeInTheDocument();
    }
});
