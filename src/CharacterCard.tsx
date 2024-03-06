import {CharacterTYPE} from "./characters.ts";
import {Link, useParams} from "react-router-dom";
import React, {useState} from "react";
import {CommentTYPE} from "./characters.ts";
import Comment from "./assets/comment.tsx";

type CharacterCardProps = {
    character: CharacterTYPE
}


export default function CharacterCard(props: CharacterCardProps) {
    const [ comments, setComments] = useState<CommentTYPE[]> ([])
        const params = useParams();
    const id: string | undefined = params.id;

    return (
        <div style = {
            {display: "flex", flexDirection: "row", alignItems :"center"}

        }>
            {props.character === undefined ? <p> character is undefined </p> : <>
                <p>
                    {props.character.name}
                </p>
                <p>
                    {props.character.species}
                </p>
                {comments.map((comment,i ) => <p key={i}>{comment.input}</p>)}
                <Comment  action={(comment) => {
                    setComments([...comments, comment ]);
                    console.log(comments);
                }}/>
                <Link to={"/characters/" + props.character.id}>Link hier</Link>
            </>}

        </div>
    )
}
