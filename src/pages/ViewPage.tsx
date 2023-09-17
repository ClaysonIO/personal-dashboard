import ReactMarkdown from "react-markdown";
import {useStoredData} from "../utilities/useStoredData.ts";

export const ViewPage = () => {
    const {storedData} = useStoredData();
    return (
        <ReactMarkdown>
            {storedData ?? "No data found"}
        </ReactMarkdown>
    )
}