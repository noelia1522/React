import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Email from '../Email'
import userEvent from '@testing-library/user-event'

describe("Email input component",()=>{
    test("render email input",()=>{
        render(<Email/>);
        
        const inputElement = screen.getByTestId("email-input")
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute("type", "email")
    })
    test("pass valid email to test email input field",async ()=>{
        render(<Email/>)

        const inputElement= screen.getByTestId("email-input")
        await userEvent.type(inputElement, "1234@gmail.com")

        expect(inputElement).toHaveValue("1234@gmail.com")
        expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    })
    test("pass invalid email to test input value", async ()=>{
        render(<Email/>)

        const inputElement= screen.getByTestId("email-input")
        await userEvent.type(inputElement, "test")
        
        expect(inputElement).toHaveValue("test");
        expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
        expect(screen.queryByTestId("error-msg").textContent).toEqual("Please enter a valid email.")
    })


})