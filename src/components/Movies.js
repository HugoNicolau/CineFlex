import OneMovie from "./OneMovie";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import loading from "./img/loading-gif.gif"

export default function Movies() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies";

    const promise = axios.get(URL);

    promise.then((res) => {
      setMoviesList(res.data);
    });

    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  if(moviesList.length===0){
    return (
      <Loading>
      <img src={loading} alt="loading"/>
      </Loading>
    )
  }

  return (
    <AllMovies>
      {moviesList.map((f) => (
        <Link key={f.id} to={`/movie/${f.id}`}>
          {" "}
          <OneMovie
            id={f.id}
            title={f.title}
            img={f.posterURL}
            overview={f.overview}
            release={f.releaseDate}
          />{" "}
        </Link>
      ))}
    </AllMovies>
  );
}

const AllMovies = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  justify-content: center;
  padding-top: 40px;
  column-gap: 30px;
  row-gap: 11px;
`;

const Loading = styled.div`
margin-top:100px;
`
