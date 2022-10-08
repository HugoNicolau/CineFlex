import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Session() {
  const [sessionTickets, setSessionTickets] = useState([]);
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [buyerName, setBuyerName] = useState("")
  const [buyerCPF, setBuyerCPF] = useState("")

  const params = useParams();

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${params.idSession}/seats`;

    const promise = axios.get(URL);
    promise.then((res) => {
      setSessionTickets(res.data.seats);
    });
    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, [params.idSession]);

  function selectButton(id) {
    let newArray = [...selectedButtons, id];

    if (selectedButtons.includes(id)) {
      newArray = newArray.filter((n) => n !== id);
    }
    setSelectedButtons(newArray);
  }

  function buyTicket(e){
    e.preventDefault()
    const URL = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many"
    const body = {
        ids: selectedButtons,
        name: buyerName,
        cpf: buyerCPF
    }

    const promise = axios.post(URL, body)
    
    promise.then((res) => {
        console.log(res.data)
    })
    promise.catch((err) => {
        console.log(err.response.data)
    })
  }

  return (
    <ContentBox>
      <h1>Selecione o(s) assento(s)</h1>
      <div>
        {sessionTickets.map((s) => {
          if (s.isAvailable)
            return (
              <TicketButton
                isPossible={s.isAvailable}
                isSelected={selectedButtons.includes(s.id)}
                key={s.id}
                onClick={() => selectButton(s.id)}
              >
                {s.id < 10 ? <h2>0{s.name}</h2> : <h2>{s.name}</h2>}
              </TicketButton>
            );
          else {
            return (
              <TicketButton isPossible={s.isAvailable} key={s.id} onClick={()=> alert("Esse assento não está disponível")}>
                {s.id < 10 ? <h2>0{s.name}</h2> : <h2>{s.name}</h2>}
              </TicketButton>
            );
          }
        })}
      </div>
      <BoxButtonDiv>
        <BoxButton option={"selected"}>
          <button />
          <h3>Selecionado</h3>
        </BoxButton>
        <BoxButton option={"available"}>
          <button />
          <h3>Disponível</h3>
        </BoxButton>
        <BoxButton option={"unavailable"}>
          <button />
          <h3>Indisponível</h3>
        </BoxButton>
      </BoxButtonDiv>
      <Buy>
        <form onSubmit={buyTicket}>
          <label htmlFor="nameField">Nome do comprador:</label>
          <input type="text" id="nameField" value={buyerName} onChange={e => setBuyerName(e.target.value)} placeholder="Digite seu nome..." required/>
          <label htmlFor="cpfField">CPF do comprador:</label>
          <input type="text" pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}" id="cpfField" value={buyerCPF} onChange={e => setBuyerCPF(e.target.value)} placeholder="Digite seu CPF..." required/>
          <br />
          <button type="submit">Reservar assento(s)</button>
        </form>
      </Buy>
    </ContentBox>
  );
}

const ContentBox = styled.div`
  margin-top: 70px;
  margin-bottom: 150px;

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
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 24px;
    margin-right: 24px;
    column-gap: 7px;
    row-gap: 18px;
  }
`;

const TicketButton = styled.button`
  width: 26px;
  height: 26px;
  left: 24px;
  top: 158px;
  background-color: ${(props) =>
    props.isPossible === true
      ? props.isSelected === true
        ? "#1aae9e"
        : "#c3cfd9"
      : "#FBE192"};
  border: 1px solid
    ${(props) => (props.isPossible === true ? "#808F9D" : "#F7C52B")};
  border-radius: 12px;
  &:hover{

  cursor : ${props => props.isPossible === true ? "pointer" : ""}
  
  }

  h2 {
    width: 13px;
    height: 10px;
    left: 164px;
    top: 254px;
    font-family: "Roboto";
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
`;

const BoxButton = styled.section`
  display: flex;
  flex-direction: column;
  /* background-color: papayawhip; */
  flex-wrap: wrap;
  padding: 0 0 0 0;
  margin-left: 0;
  margin-right: 0;
  align-items: center;
  button {
    width: 25px;
    height: 25px;
    background: ${(props) =>
      props.option === "selected"
        ? "#1aae9e"
        : props.option === "available"
        ? "#C3CFD9"
        : "#FBE192"};
    border: 1px solid
      ${(props) =>
        props.option === "selected"
          ? "#0E7D71"
          : props.option === "available"
          ? "#7B8B99"
          : "#F7C52B"};
    border-radius: 17px;
    margin-bottom: 15px;
  }
  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;
    color: #4e5a65;
  }
`;

const BoxButtonDiv = styled.section`
  /* background-color:red; */
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin-top: 30px;
  margin-left: 24px;
  margin-right: 23px;
  flex-wrap: nowrap;
`;

const Buy = styled.section`
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 42px;
  display: flex;

  input {
    width: 95%;
    height: 51px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    margin-bottom: 10px;
    margin-top:3px;
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color:#293845;
    padding-left:18px;

    &:placeholder{
        color: #AFAFAF;
    }

  }
  label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #293845;
  }
  button{
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    display:flex;
    justify-content:center;
    margin-left:auto;
    margin-right:auto;
    border:none;
    margin-top:57px;
    &:hover{
        cursor:pointer;
        background-color:#fc9a55;
    }

  }
`;
