import { render, screen } from "@testing-library/react";
import AboutMe from "./components/about-me";

test("AboutMe render", () => {
  render(<AboutMe />);
  const lorem = screen.getByText(/JavaScript/i);
  expect(lorem).toBeInTheDocument();
});
