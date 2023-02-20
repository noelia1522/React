import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Application } from "../Application";

describe("Application Component", () => {
  test("test renders", () => {
    render(<Application />);
    const headingElement1 = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingElement1).toBeInTheDocument();

    const headingElement2 = screen.getByRole("heading", {
      level: 2,
    });
    expect(headingElement2).toBeInTheDocument();

    const ImageElement = screen.getByAltText("image");
    expect(ImageElement).toBeInTheDocument();

    // const nameElement = screen.getByRole("textbox", {
    //   name: "Name",
    // });
    // const nameElement = screen.getByDisplayValue("Sarah");
    // expect(nameElement).toBeInTheDocument();

    // const nameElement = screen.getByPlaceholderText("Fullname");
    // expect(nameElement).toBeInTheDocument();

    // const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    // expect(nameElement2).toBeInTheDocument();

    const textareaElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(textareaElement).toBeInTheDocument();

    const selectElement = screen.getByRole("combobox", {
      name: "Job location",
    });
    expect(selectElement).toBeInTheDocument();

    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();
  });
});
