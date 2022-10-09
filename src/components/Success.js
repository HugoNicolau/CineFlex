import styled from "styled-components"

export default function Success(props){

    console.log(props, "essas são as props de sucesso")
    return(
        <BoxSuccess>
            <h1>Pedido feito com sucesso!</h1>

            <h2>Filme e Sessão</h2>
            <h3>Enola Holmes</h3>
            <h3>24/06/2021 15:00</h3>
            <br/>

            <h2>Ingressos</h2>
            <h3>Assento 15</h3>
            <h3>Assento 16</h3>
            <br/>

            <h2>Comprador(a)</h2>
            <h3>Nome: Fulano de tal</h3>
            <h3>CPF: 123.456.789-10</h3>
            <button>Voltar para a Home</button>
            
        </BoxSuccess>
    )
}

const BoxSuccess = styled.div`
    margin-top:100px;
    margin-left:30px;
    margin-right:30px;
`