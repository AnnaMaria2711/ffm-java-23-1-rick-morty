import {useParams} from "react-router-dom";
import {CharacterProps} from "./characters.tsx";

function CharacterDetailCard(props : CharacterProps){
    const params = useParams();
    const id: string | undefined = params.id;
    return (
        <div>
            {props.characters
                .filter(c => c.id.toString() === id)
                .map(c => <p>
                    {c.name},
                    {c.species}
                </p>)}
        </div>
    )
}
export default CharacterDetailCard