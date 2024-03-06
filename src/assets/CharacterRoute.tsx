import {useParams} from "react-router-dom";
import {charactersResponse} from "../characters.ts";

export default function CharacterRoute() {
    const params = useParams();
    const id: string | undefined = params.id;
    return (
        <div>
            {charactersResponse.results
                .filter(c => c.id.toString() === id)
                .map(c => <p>
                    {c.name},
                    {c.species}
                </p>)}
        </div>
    )
}