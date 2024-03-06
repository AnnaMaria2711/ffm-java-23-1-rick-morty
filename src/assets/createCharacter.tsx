import {CharacterTYPE} from "../characters.ts";
import {useState} from "react";
import characters from "./characters.tsx";
import {Link} from "react-router-dom";
type Props = {
    action : (newValue: CharacterTYPE) => void
}
function CreateCharacter(props : Props) {
    const [form, setForm] = useState<CharacterTYPE>({
        id: 0,
        name: "",
        status: "",
        species: "",
        type: "",
        comments :[]
    })

    const onChangeValues = (name: string, value: string | number | boolean) => {
        const newValue: CharacterTYPE = {
            ...form, //kopiert alle werte aus ^dem alten state
            [name]: value
        };
        setForm(newValue);

    }
    return <form onSubmit={(e) => {
        e.preventDefault();
        console.log(form)
        props.action(form);
    }}>
        <input placeholder={"id"} name="id" type="number" onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input placeholder={"name"} name="name" type="text" onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input placeholder={"Hier bitte Status eintragen"} name="status" type="text" onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input placeholder={"species"} type="text" name="species" onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input placeholder={"type"} type="text" name="type"onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <button type="submit"> Save character</button>
        <Link to={"/characters"}>characters</Link>
    </form>


}
export default CreateCharacter