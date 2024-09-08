import { useState } from "react";
import Button from "./component/Button";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <p>Count : {count}</p>
        <Button onclick={()=> setCount(count + 1)} > Increment </Button>
      </div>
    </>
  );
}

export default App
