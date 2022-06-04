import { render, fireEvent, screen } from "@testing-library/react";
import Home from "../components/Home";


test("renders title new", () => {
    render(<Home />);
    const title = screen.getByTestId("mytesttitle");
    expect(title).toBeInTheDocument();

});