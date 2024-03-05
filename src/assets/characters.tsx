
import CharacterGallery from "../CharacterGallery.tsx";
import {charactersResponse} from "../characters.ts";

function Characters(){
    return <CharacterGallery characters={charactersResponse.results}/>

}

export default Characters