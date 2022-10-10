import styled from "styled-components";
import Movies from "./Movies";

export default function MainScreen() {
  return (
    <>
      <Screen>
        Selecione o filme
        <Movies />
      </Screen>
    </>
  );
}

const Screen = styled.div`
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
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.04em;
  text-align: center;
`;
