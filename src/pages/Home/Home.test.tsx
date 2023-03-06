import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Home component", () => {
    it("renders search input and add movie button", () => {
        render(<Home />);
    const searchInput = screen.getByPlaceholderText("Search");
        const addMovieButton = screen.getByText("Add Movie");
        expect(searchInput).toBeInTheDocument();
        expect(addMovieButton).toBeInTheDocument();
    });

    it("renders movie cards", async () => {
        const mockMovie = {
            id: "1",
            title: "Mock Movie",
            year: 2022,
            poster: "https://example.com/poster.jpg",
            genre: "Action",
        };
        jest.spyOn(global, "fetch").mockResolvedValue({
            json: () => Promise.resolve({ payload: [mockMovie], metadata: {} }),
        } as Response);
        render(<Home />);
    const movieCards = await screen.findAllByRole("img");
        expect(movieCards).toHaveLength(1);
    });

    it("renders 'No movies available' when there are no movies", async () => {
        jest.spyOn(global, "fetch").mockResolvedValue({
            json: () => Promise.resolve({ payload: [], metadata: {} }),
        } as Response);
        render(<Home />);
    const noMoviesText = await screen.findByText("No movies available");
        expect(noMoviesText).toBeInTheDocument();
    });

    it("renders skeleton loaders while loading movies", async () => {
        jest.spyOn(global, "fetch").mockResolvedValue(
            new Promise(() => {
                // Do nothing and let the test timeout to simulate loading state
            })
        );
        render(<Home />);
    const skeletons = await screen.findAllByTestId("skeleton-loader");
        expect(skeletons).toHaveLength(5);
    });
});