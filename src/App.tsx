import './App.css'
import React, {useState} from "react";
import {CharacterTYPE, charactersResponse} from "./characters.ts";
import {Route, Routes} from "react-router-dom";
import HomeWillkommen from "./assets/HomeWillkommen.tsx";
import Characters from "./assets/characters.tsx";
import HeaderPage from "./assets/headerPage.tsx";
import CharacterDetailCard from "./assets/CharacterDetailCard.tsx";
import CreateCharacter from "./assets/createCharacter.tsx";

function App() {

    const [characters, setCharacters] = useState<CharacterTYPE[]>(charactersResponse.results)

    return (
        <div>
            <Routes>
                <Route path="/Home/Willkommen" element={<HomeWillkommen/>}/>
                <Route path="/characters" element={<Characters characters={characters} />}/>
                <Route path="/headerPage" element={<HeaderPage/>}/>
                <Route path="/characters/:id" element={<CharacterDetailCard characters={characters} />}/>
                <Route path={"/characters/add"} element={<CreateCharacter  action={(e) => {
                    setCharacters([...characters, e])
                    console.log(characters)
                }}/>}/>
            </Routes>

        </div>
    )
}

export default App
