import {useMemo} from "react";

export function useStoredData(){
    const storedData = useMemo(()=>{
        return window.localStorage.getItem('data');
    }, [])

    const setStoredData = (data: string)=>{
        window.localStorage.setItem('data', data);
    }

    return {storedData, setStoredData}
}