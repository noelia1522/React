import { render, screen } from "@testing-library/react";
import Greet from "../Greet";
import user from "@testing-library/user-event";
import button from "../Button";

describe("test Greeting component", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();

    const buttonElement = screen.getByTestId("mybutton");
    expect(buttonElement).toBeInTheDocument();
  });
  test("Greet component renders correctly Hello [name]", () => {
    render(<Greet name="Nath" />);
    const textElement = screen.getByText("Hello Nath");
    expect(textElement).toBeInTheDocument();
  });
  test("if user clicks once, isLoggedIn is true", async () => {
    render(<Greet />);
    const buttonElement = screen.getByTestId("mybutton");
    //click on the button once
    await user.click(buttonElement);
    //para coger le h1 que hay en greet
    const headingElement = screen.getByRole("heading", {
      level: 1, //porque es h1 si fuese h2 seria 2
    });
    expect(headingElement).toHaveTextContent("true")
  });
});
