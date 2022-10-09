import styled from "styled-components";

export default function Footer(props) {
  const {posterURL, title } = props;
  return (
    <FooterDiv>
      
        <>
          <div>
            <img src={posterURL} alt={title} />
          </div>
          <FooterInfo>
          <h4>{title}</h4>
          
          </FooterInfo>
        </>
      
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 117px;
  left: 0px;
  bottom: 0px;
  background: #dfe6ed;
  border: 1px solid #9eadba;
  display:flex;
  align-items:center;

  div {
    width: 64px;
    height: 89px;
    margin-left: 10px;
    margin-right: 14px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  img {
    width: 48px;
    height: 72px;
  }
  
`;

const FooterInfo = styled.section`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

h4 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #293845;
    text-align:left;
    flex-wrap:wrap;
    justify-content:left;
    align-items:center;
    padding-left:0;
}
`