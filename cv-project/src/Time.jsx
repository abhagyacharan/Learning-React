import { useState } from "react";
import { useEffect } from "react";

export default function Counter() {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const key = setInterval(() => {
            setCounter(count => count + 1)
        }, 1000);

        return () => {
            clearInterval(key);
        }
    }, []);
    
    return(
        <div>
            <h2>Time Elapsed: </h2>
            <p>{counter} seconds have elapsed.</p>
        </div>
    )
}