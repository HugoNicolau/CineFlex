import styled from "styled-components";

export default function Movie(props){

    const {id, title, img, overview, releaseDate} = props;
    return(
        <OneMovie>
        <img src={img} alt={title}/>
        </OneMovie>
    )
}


const OneMovie = styled.div`

height: 209px;
width: 145px;
left: 30px;
top: 169px;
border-radius: 3px;
background: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);


img{
    height: 193px;
width: 129px;
left: 38px;
top: 177px;
border-radius: 0px;

}
`