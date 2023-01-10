import { useState } from "react";

function Input() {
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
        console.log(text)
    }

    return (
        <>
            <input type="text" value={text} onChange={onChange} ></input>
        </>
    )
}

export default Input;