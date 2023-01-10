import { useState } from "react";

function Counter() {
    const [num, setNum] = useState(0);
    const onIncrease = () => {
        setNum(num + 1);
    }
    
    const onDecrease = () => {
        setNum(num - 1);
    }

    return (
        <>
            <h1>{num}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </>
    );
}

export default Counter;