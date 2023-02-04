import Users from "./Users";
import { render, fireEvent, screen } from "@testing-library/react";
// import axios from "axios";
// waitFor,
import BASE_URL from "../../../config";
import { MemoryRouter as Router } from "react-router-dom";
test("show error message wwhen fields are not enter", () => {
  render(
    <Router>
      <Users />
    </Router>
  );
  const element: HTMLElement[] = screen.getAllByTestId("card");
  expect(element).toBeInTheDocument();
});
test("show div content", () => {
  render(
    <Router>
      <Users />
    </Router>
  );
  const element: any = screen.getAllByTestId("showsearchdiv");
  expect(element).not.toBeInTheDocument();
  fireEvent.click(element);
  expect(element).toBeInTheDocument();
});
test("show dot div content", () => {
  render(
    <Router>
      <Users />
    </Router>
  );
  const element: any = screen.getAllByTestId("showDotdiv");
  expect(element).not.toBeInTheDocument();
  fireEvent.click(element);
  expect(element).toBeInTheDocument();
});

// jest.mock("axios");
// const dummyTodos = [
//   {
//     userId: 1,
//     id: 1,
//     title: "todo 1",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "todo 2",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "todo 3",
//     completed: false,
//   },
// ];

// axios.get.mockResolvedValue({ data: dummyTodos });
test("todos list", async () => {
  //   axios.get.mockResolvedValue({ data: dummyTodos });
  render(
    <Router>
      <Users />
    </Router>
  );
  //   const todoList = await waitFor(() => screen.findAllByTestId("todo"));
  // expect(todoList).toHaveLength(3);

  const response = await BASE_URL.get("/users");
  expect(response.status).toEqual(200);
  expect(response.data).toHaveLength(100);
});
