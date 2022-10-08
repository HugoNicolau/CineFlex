import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import loading from "./img/loading-gif.gif";

export default function Movie() {
  const { idMovie } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
   const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`;
    const promise = axios.get(URL);

    promise.then((res) => {
      setMovie(res.data.days);
    });

    promise.catch((err) => {
      console.log(err.response.data, "erro");
    });
  }, []);

  //   const { id, title, img, overview, releaseDate } = props;
  if (movie.length === 0) {
    return (
      <Load>
        <img src={loading} alt="loading" />
      </Load>
    );
  }

  return (
    <SecondScreen>
      Selecionar o horário
      <BoxSchedule>
        {movie.map((m) => {
          return (
            <EachSchedule key={m.id}>
              <h1>
                {m.weekday} - {m.date}
              </h1>

              <div>
                {m.showtimes.map((s) => (
                  
                    <Link key={s.id} to={`/session/${s.id}`}>
                  <OrangeBox >
                    {s.name}
                  </OrangeBox>
                    </Link>
                ))}
              </div>
            </EachSchedule>
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
  text-align: center;
  justify-content: start;
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
  letter-spacing: 0.04em;
  color: #293845;
`;

const OrangeBox = styled.button`
  color: white;
  width: 83px;
  height: 43px;
  background: #e8833a;
  border-radius: 3px;
  margin-right: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #ffffff;
  border-color: #e8833a;

  &:hover {
    background: #c45c12;
    cursor: pointer;
  }
`;

const BoxSchedule = styled.div`
  margin-top: 40px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  align-items: flex-start;
  letter-spacing: 0.02em;
  color: #293845;
  padding-left: 23px;
  row-gap: 22px;
`;

const EachSchedule = styled.div`
  display: flex;
  align-items: flex-start;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  letter-spacing: 0.02em;
  color: #293845;
  flex-direction: column;
  row-gap: 23px;
`;

const Load = styled.div`
  height: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vw;
  width: 100vw;
  img {
    width: 50px;
  }
`;
