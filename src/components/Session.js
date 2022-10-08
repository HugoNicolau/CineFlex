import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Session() {

    const [sessionTickets, setSessionTickets] = useState([])
    const params = useParams();
    console.log(params)

    useEffect(() =>{
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${params.idSession}/seats`
        
        const promise = axios.get(URL);
        promise.then( (res) => {
            setSessionTickets(res.data.seats)
        })
        promise.catch((err) => {
            console.log(err.response.data)
        })

    }, [])



  return (
    <ContentBox>
      <h1>Selecione o(s) assento(s)</h1>
      <div>
    {sessionTickets.map((s) => {
        return(

            <button key={s.id}><h2>{s.name}</h2></button>
        )

    })}
      </div>
    </ContentBox>
  );
}

const ContentBox = styled.div`
  margin-top: 70px;
  
  /* background-color: green; */
  h1 {
    margin-top: 100px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    justify-content: center;
    /* background-color:blue; */

    color: #293845;
  }
  div {
    margin-top:30px;
    display:flex;
    flex-wrap: wrap;
    margin-left:24px;
    margin-right:24px;
    column-gap:7px;
    row-gap:18px;

  }
  button {
    width: 26px;
    height: 26px;
    left: 24px;
    top: 158px;
    background: #c3cfd9;
    border: 1px solid #808f9d;
    border-radius: 12px;
    h2{
        width: 13px;
height: 10px;
left: 164px;
top: 254px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;

color: #000000;

    }

  }
`;
