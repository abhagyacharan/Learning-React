import { useState } from "react"
import '../styles/General.css'

export default function General() {

    const [edit, setEdit] = useState(true);
    const [info, setInfo] = useState({name:'', email:'', phone:''});

    const handleChange = (e) => {         //function handleChange(e) (same)
        const {name, value} = e.target;
        setInfo({...info, [name]:value});
    }

    const toggleEdit = () => setEdit(!edit);

    return(
        <div>
            <h2>General Info</h2>
            {edit ? (
                <form>
                    <input name="name" value={info.name} placeholder="Name" onChange={handleChange} />
                    <input name="email" value={info.email} placeholder="Email" onChange={handleChange} />
                    <input name="phone" value={info.phone} placeholder="Phone" onChange={handleChange} />
                    <button type="button" onClick={toggleEdit}>Submit</button>
                </form>
            ) : (
                <form>
                    <p>Name: {info.name}</p>
                    <p>Email: {info.email}</p>
                    <p>Phone: {info.phone}</p>
                    <button type="button" onClick={toggleEdit}>Edit</button>
                </form>
            )}
        </div>
    );
}