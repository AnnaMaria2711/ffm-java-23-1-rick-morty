import './App.css'
import React, {useState} from "react";
import {Character, charactersResponse} from "./characters.ts";
import {Routes, Route} from "react-router-dom";
import HomeWillkommen from "./assets/HomeWillkommen.tsx";
import Characters from "./assets/characters.tsx";
import HeaderPage from "./assets/headerPage.tsx";
import CharacterRoute from "./assets/CharacterRoute.tsx";

function App() {

    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)

    return (
        <div>

            <Routes>
                <Route path ="/Home/Willkommen" element = {<HomeWillkommen /> } />
                <Route path = "/characters" element = {<Characters /> } />
                <Route path = "/headerPage" element= {<HeaderPage /> } />
                <Route path = "/characters/:id" element = {< CharacterRoute />} />
            </Routes>

        </div>
    )
}

export default App
