import Movie from "./Movie"
import Filmes from "./mock"
import styled from "styled-components"


export default function Movies(){

    return(
        <AllMovies>
        {Filmes.map((f) => <Movie id={f.id} title={f.title} img={f.posterURL} overview={f.overview} release={f.releaseDate}/>)}
        </AllMovies>
    )
}

const AllMovies = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
align-items:center;
width:100%;
justify-content:center;
padding-top: 40px;
column-gap: 30px;
row-gap:11px;
`