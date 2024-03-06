import {CommentTYPE} from "../characters.ts";
import {useState} from "react";
type CommentProps = {
    action: (newValue: CommentTYPE) => void;
}

export default function Comment(props: CommentProps) {
    const [comment, setComment] = useState<CommentTYPE>({
        input: ""
    });
    const onChangeValues = (input: string, value: string) => {
        const newValue: CommentTYPE = {
            ...comment,
            [input]: value
        };
        setComment(newValue);
    };

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.action(comment); // Call the action function with the current comment state
        }}>
            <input
                placeholder="comment"
                name="input"
                type="text"
                value={comment.input} // Bind input value to state
                onChange={(e) => onChangeValues(e.target.name, e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
