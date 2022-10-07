import styled from "styled-components"

export default function NavBar(){

    return(
        <Bar>CINEFLEX</Bar>
    )
}

const Bar = styled.div`
position:fixed;
width: 100%;
height: 67px;
left: 0px;
top: 0px;
display:flex;
align-items:center;
justify-content:center;
background: #C3CFD9;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 40px;
display: flex;
align-items: center;
text-align: center;

color: #E8833A;


`