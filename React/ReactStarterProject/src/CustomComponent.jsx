import { useState } from "react";

function CustomComponent () {
    let [x, setX] = useState(10);

    return (
        <>
            <button onClick={() => setX(x + 1)}>Click me</button>
            {x}
        </>
    );
}

export default CustomComponent;