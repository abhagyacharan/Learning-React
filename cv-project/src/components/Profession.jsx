import { useState } from "react";
import '../styles/Profession.css'
import { useEffect } from "react";

export default function Profession() {

    const [edit, setEdit] = useState(true);
    const [count, setCount] = useState(0);
    const [proInfo, setProInfo] = useState({ company_name: '', position: '', responsibilities: '', start_date: '', end_date: '' });

    function handleChange(e) {
        const { name, value } = e.target;
        setProInfo({ ...proInfo, [name]: value });
    };

    useEffect(() => {
        if (!edit) {
            setCount(prevCount => prevCount+1);
        }
    }, [edit]);

    const toggleEdit = () => setEdit(!edit);

    return (
        <div>
            <h2>Professional Details</h2>
            <p>Number of edits: {count}</p>
            {edit ? (
                <form>
                    <input name="company_name" value={proInfo.company_name} onChange={handleChange} placeholder="Company Name" />
                    <input name="position" value={proInfo.position} onChange={handleChange} placeholder="Position" />
                    <input name="responsibilities" value={proInfo.responsibilities} onChange={handleChange} placeholder="Responsibilities" />
                    <input name="start_date" value={proInfo.start_date} onChange={handleChange} placeholder="Start Date" />
                    <input name="end_date" value={proInfo.end_date} onChange={handleChange} placeholder="End Date" />
                    <button type="button" onClick={toggleEdit}>Submit</button>
                </form>
            ) : (
                <div>
                    <p>Company Name: {proInfo.company_name}</p>
                    <p>Position: {proInfo.position}</p>
                    <p>Responsibilities: {proInfo.responsibilities}</p>
                    <p>Start Date: {proInfo.start_date}</p>
                    <p>End Date: {proInfo.end_date}</p>
                    <button type="button" onClick={toggleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
}