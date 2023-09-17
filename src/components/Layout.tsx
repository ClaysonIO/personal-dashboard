import {Header} from "./Header.tsx";
import {Outlet} from "react-router";

export const Layout = () => {
    return (
        <>
        <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}