import React, { useEffect, useState } from "react";

export default function Login() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending("movie", setTrendingMovies);
  }, []);

  async function getTrending(mediaType, func) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2UxNzM5ZmY3MDY4NzVmZDM2NmQzNjY4ZDZjY2IzNiIsIm5iZiI6MTcyODg5OTcxOC4wODU2NTEsInN1YiI6IjY3MGNlODVmYjE1ZDk3YjFhOTNjZmMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ddxxN6AQoGGkR-85Z_PfcOzimYXmYfhsXa-QJEsEak",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?language=en-US`,
      options
    );
    const data = await response.json();
    func(data.results);
  }
  return (
    <>
      <div className="row">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr mb-3 w-25"></div>
            <h2 className="h4">
              Trending <br />
              Movies <br /> to watch right now
            </h2>
            <p className="py-3">Most watched movies by days</p>
            <div className="brdr mt-3 w-100"></div>
          </div>
        </div>

        {trendingMovies.slice(0, 10).map((movie, index) => (
          <div className="col-md-2">
            <div className="movie">
              <img
                className="w-100"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="movie poster"
              ></img>
              <h6>{movie.title}</h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
