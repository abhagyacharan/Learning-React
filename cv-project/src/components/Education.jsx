import { useState } from "react";
import '../styles/Education.css'

export default function Education() {

    const [edit, setEdit] = useState(true);
    const [eduInfo, setEduInfo] = useState({school_name:'', grade:'', pass_year:''});

    function handleChange(e){
        const {name, value} = e.target;
        setEduInfo({...eduInfo, [name]:value});
    };

    const toggleEdit = () => setEdit(!edit);

    return(
        <div>
            <h2>Education Details</h2>
            {edit ? (
                <form>
                    <input name="school_name" value={eduInfo.school_name} onChange={handleChange} placeholder="School Name" />
                    <input name="grade" value={eduInfo.grade} onChange={handleChange} placeholder="Grade" />
                    <input name="pass_year" value={eduInfo.pass_year} onChange={handleChange} placeholder="Pass Year" />
                    <button type="button" onClick={toggleEdit}>Submit</button>
                </form>
            ) : (
                <div>
                    <p>School Name: {eduInfo.school_name}</p>
                    <p>Grade: {eduInfo.grade}</p>
                    <p>Pass Year: {eduInfo.pass_year}</p>
                    <button type="button" onClick={toggleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}