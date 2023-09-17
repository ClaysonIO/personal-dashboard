import {useState} from "react";
import {useNavigate} from "react-router";
import {useStoredData} from "../utilities/useStoredData.ts";


export const EditPage = ()=>{
    const {storedData, setStoredData} = useStoredData();
    const [data, setData] = useState(storedData);
    const navigate = useNavigate();



    function saveChanges(){
        setStoredData(data ?? "");
        navigate("/")
    }

    return <>
        <button onClick={saveChanges}>Save Changes</button>
    <textarea style={{height: '400px'}} onChange={(e)=>setData(e.currentTarget.value ?? "")}>
        {data}
    </textarea>
    </>
}