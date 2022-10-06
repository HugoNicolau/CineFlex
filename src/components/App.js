import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainScreen from "./MainScreen";
import NavBar from "./NavBar";
import Movie from "./Movie";
import Session from "./Session";
import Success from "./Success";


export default function App(){

    return(
        <BrowserRouter>
        <NavBar/>
        <Routes>

        <Route path="/" element={<MainScreen/>}/>
        <Route path="/movie" element={<Movie/>}/>
        <Route path="/session" element={<Session/>}/>
        <Route path="/success" element={<Success/>}/>

        </Routes>      
        </BrowserRouter>
    )
}

