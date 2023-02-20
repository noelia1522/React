import { render, screen } from "@testing-library/react";
import CounterTwo from "../Counter-two";
import user from "@testing-library/user-event";

describe("CounterTwo", () => {
  test("renders correctly", () => {
    render(<CounterTwo counter={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();

    const countElement = screen.getByTestId("counter");
    expect(countElement).toHaveTextContent("0");
  });

  test("handlers are called correctly", async () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        counter={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(incrementHandler).toBeCalledTimes(1);
    expect(decrementHandler).toBeCalledTimes(1);
  });
});
