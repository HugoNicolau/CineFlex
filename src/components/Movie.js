import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Schedule from "./Schedule";

export default function Movie() {
  const { idMovie } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`;
    const promise = axios.get(URL);

    promise.then((res) => {
      setMovie(res.data.days);
    });

    promise.catch((err) => {
      console.log(err.response.data, "erro");
    });
  }, []);

  //   const { id, title, img, overview, releaseDate } = props;
  console.log(movie, "Movie");
  console.log(movie[0], "day0");

  return (
    <SecondScreen>
      Selecionar o horário
      <BoxSchedule>
        {movie.map((m) => {
          return (
            <>
              <h1>
                {m.weekday} - {m.date}
              </h1>

              {m.showtimes.map((s) => (
                <OrangeBox>{s.name}</OrangeBox>
              ))}
            </>
          );
        })}
      </BoxSchedule>
    </SecondScreen>
  );
}

const SecondScreen = styled.div`
  background-color: #ffffff;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-top: 100px;
  padding-bottom: 100px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;

  color: #293845;
`;

const OrangeBox = styled.button`
  
  color: white;
  width: 83px;
  height: 43px;
  background: #e8833a;
  border-radius: 3px;
`;

const BoxSchedule = styled.div`
  margin-top: 40px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  flex-direction:column;
  align-items: center;
  letter-spacing: 0.02em;
  color: #293845;
`;
