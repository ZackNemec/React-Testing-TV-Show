import React from "react";
import { render, fireEvent, findByText, waitFor } from "@testing-library/react";
import App from "./App.js";
import { fetchShow } from "./api/fetchShow";

jest.mock("./api/fetchShow");
const episodesData = [
  {
    id: 553946,
    url:
      "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
    name: "Chapter One: The Vanishing of Will Byers",
    season: 1,
    number: 1,
  },
];

test("success render of api", async () => {
  fetchShow.mockResolvedValueOnce(episodesData);
  const { getByTestId } = render(<App />);

  const dropdown = getByTestId(/drop/);
  const seasonClick = findByText(/season 1/i);
  const wordsNeeded = findByText(/chapter two: The weirdo on maple street/i);

  await waitFor(fireEvent.click(dropdown));
  await waitFor(fireEvent.click(seasonClick));
  await waitFor(() => expect(wordsNeeded).toBeInTheDocument());
});
