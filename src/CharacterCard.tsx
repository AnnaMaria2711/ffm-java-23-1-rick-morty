import {Character} from "./characters.ts";
import {useParams} from "react-router-dom";

type CharacterCardProps = {
    character?: Character
}

export default function CharacterCard(props: CharacterCardProps) {
const params = useParams();
const id: string | undefined = params.id;
    return (
        <div>
            {props.character === undefined ? <p> character is undefined </p> : <>
                <p>
                {props.character.name}
            </p>
                <p>
                    {props.character.species}
                </p> </>}

        </div>
    )
}
