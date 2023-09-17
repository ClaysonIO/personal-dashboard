import './App.css'
import {Route, Routes} from "react-router";
import {ViewPage} from "./pages/ViewPage.tsx";
import {EditPage} from "./pages/EditPage.tsx";
import {Layout} from "./components/Layout.tsx";

function App() {

    return (
        <>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path={'/'} element={<ViewPage/>}/>
                    <Route path={'/edit'} element={<EditPage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
