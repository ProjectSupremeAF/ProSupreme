import { render, fireEvent, screen } from "@testing-library/react";
import AddItem from "../components/AddItem";


test("ID input should be renderd", () => {
    render(<AddItem />);
    const idInputElement = screen.getByPlaceholderText(/Enter ID/i);
    expect(idInputElement).toBeInTheDocument();

});

test("Panel Member Name input should be renderd", () => {
    render(<AddItem />);
    const idInputElement = screen.getByPlaceholderText(/Enter Panel Member Name/i);
    expect(idInputElement).toBeInTheDocument();

});

test("Project Group ID input should be renderd", () => {
    render(<AddItem />);
    const idInputElement = screen.getByPlaceholderText(/Enter Project Group ID/i);
    expect(idInputElement).toBeInTheDocument();

});

test("Marks For Topic input should be renderd", () => {
    render(<AddItem />);
    const idInputElement = screen.getByPlaceholderText(/Enter Marks For Topic/i);
    expect(idInputElement).toBeInTheDocument();

});

test("Feedback input should be renderd", () => {
    render(<AddItem />);
    const idInputElement = screen.getByPlaceholderText(/Enter Feedback/i);
    expect(idInputElement).toBeInTheDocument();

});

test("Marks For Presentation input should be renderd", () => {
    render(<AddItem />);
    const idInputElement = screen.getByPlaceholderText(/Enter Marks For Presentation/i);
    expect(idInputElement).toBeInTheDocument();

});

test("button should be renderd", () => {
    render(<AddItem />);
    const userInputElement = screen.getByRole("button");
    expect(userInputElement).toBeInTheDocument();

});