import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../Todo";

describe("test todo component", () => {
  test.skip("todo component is rendered in DOM without any props", () => {
    render(<Todo />);
    const todoElement = screen.getByTestId("todo-1");
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("Hello!");
  });

  afterEach(() => {
    cleanup();
  });

  /*test("todo component is rendered in DOM with some props", ()=>{
        const todo={_id:3, title: "writing code", isCompleted:false}
        render(<Todo todo={todo}/>)
        const todoElement =screen.getByTestId("todo-3")
        expect(todoElement).toBeInTheDocument()
       // expect(todoElement).toHaveTextContent("Hello!")
    })*/
    test("todo component renders non-completed todos", () => {
        const todo = { _id: 2, title: "writing code", isCompleted: false };
        render(<Todo todo={todo} />);
        const todoElement = screen.getByTestId("todo-2");
        expect(todoElement).toBeInTheDocument();
        expect(todoElement).toHaveTextContent("writing code");
        expect(todoElement).not.toContainHTML("<del><h1></h1></del>");
      });

  test("todo component renders completed todos", () => {
    const todo = { _id: 2, title: "writing code", isCompleted: true };
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId("todo-2");
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("writing code");
    expect(todoElement).toContainHTML("<del><h1>writing code</h1></del>");
  });
});
