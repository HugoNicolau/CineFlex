import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Success(props){

    const {cpf, date, name, time, title, tickets} = props.successInfo;
   
    const  newCpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")

    return(
        <BoxSuccess>
            <h1>Pedido feito com sucesso!</h1>
            
            <h2>Filme e Sessão</h2>
            <h3 data-identifier="movie-session-infos-reserve-finished">{title}</h3>
            <h3 data-identifier="movie-session-infos-reserve-finished">{date} {time}</h3>
            <br/>

            <h2>Ingressos</h2>
            {tickets.map((t, i) => <h3 data-identifier="seat-infos-reserve-finished" key={i}>Assento {t}</h3>)}
            
            <br/>

            <h2>Comprador(a)</h2>
            <h3 data-identifier="buyer-infos-reserve-finished">Nome: {name}</h3>
            <h3 data-identifier="buyer-infos-reserve-finished">CPF: {newCpf}</h3>
            <Link to={"/"}>
            <button data-identifier="back-to-home-btn">Voltar para a Home</button>
            </Link>
        </BoxSuccess>
    )
}

const BoxSuccess = styled.div`
    margin-top:100px;
    margin-left:30px;
    margin-right:30px;
    font-family: "Roboto";

    h1{
        color:#247A6B;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;
        width:50%;
        margin-left:auto;
        margin-right:auto;
        margin-bottom: 60px;
    }
    h2{
        color:#293845;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: left;
        margin-bottom:10px;
        margin-top:40px;
    }
    h3{
        color:#293845;
        font-size: 22px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0.04em;
        text-align: left;
        display:flex;
        flex-wrap:wrap;

    }
    button{
        margin-top:80px;
        margin-left:auto;
        margin-right:auto;
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        border:none;
        justify-content:center;
        text-decoration:none;
        cursor:pointer;

        &:visited{
            text-decoration:none;
        }

        &:hover{
            background: #ffa564;

        }
    }
    
    a{
        text-decoration:none;
       
    }
`