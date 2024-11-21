import { useState } from "react"

export default function Human() {
    
    const [f_name, setF_name] = useState("");
    const [l_name, setL_name] = useState("");

    return(
        <>
            <input 
            type="text"
            value={f_name}
            onChange={(event) => setF_name(event.target.value)}
            />
            <input 
            type="text"
            value={l_name}
            onChange={(event) => setL_name(event.target.value)}
            />

            <h1>{f_name} {l_name}</h1>
        </>
        
    );
}