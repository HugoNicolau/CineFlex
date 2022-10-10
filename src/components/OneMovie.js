import styled from "styled-components";

export default function OneMovie(props) {
  
    
  const {  title, img } = props;
  return (
    <EachMovie>
      
        <img src={img} alt={title} />
        
        
      
    </EachMovie>
  );
}

const EachMovie = styled.div`
  height: 209px;
  width: 145px;
  left: 30px;
  top: 169px;
  border-radius: 3px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  &:hover{
    opacity: 0.7;
  }

  img {
    height: 193px;
    width: 129px;
    left: 38px;
    top: 177px;
    border-radius: 0px;
  }
  
`;
