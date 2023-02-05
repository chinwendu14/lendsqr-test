import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
import { MemoryRouter as Router } from "react-router-dom";
test("show error message wwhen fields are not enter", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const elementButton: any = screen.getByTestId("submit");
  fireEvent.click(elementButton);
});

test("check if Email input element exist", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const inputEmail: HTMLInputElement = screen.getByPlaceholderText("Email");
  expect(inputEmail).toBeInTheDocument();
});

test("check if Password input element exist", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const inputEmail: HTMLInputElement = screen.getByPlaceholderText("Password");
  expect(inputEmail).toBeInTheDocument();
});

test("check if user can input Email", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const inputEmail: HTMLInputElement = screen.getByPlaceholderText("Email");
  fireEvent.change(inputEmail, { target: { value: "email" } });
  expect(inputEmail.value).toBe("email");
});
test("check if user can input Password", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const inputEmail: HTMLInputElement = screen.getByPlaceholderText("Password");
  fireEvent.change(inputEmail, { target: { value: "password" } });
  expect(inputEmail.value).toBe("password");
});
