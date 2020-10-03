import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes.js";

test("re-render correct list of episodes", () => {
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
  const { rerender, getAllByTestId } = render(<Episodes episodes={[]} />);
  rerender(<Episodes episodes={episodesData} />);
  const episodes = getAllByTestId(/episode/);
  expect(episodes).toHaveLength(1);
});
