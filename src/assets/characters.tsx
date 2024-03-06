
import CharacterGallery from "../CharacterGallery.tsx";
import { CharacterTYPE} from "../characters.ts";

export type CharacterProps = {
    characters : CharacterTYPE[]
}
function Characters(props: CharacterProps){

    return <CharacterGallery characters={props.characters}/>

}

export default Characters