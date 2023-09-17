import {NavLink} from "react-router-dom";

export const Header = ()=>{
    return (
        <header>

<h3>My Dashboard</h3>
            <NavLink to={"/edit"}>
            <button>Edit</button>
            </NavLink>
        </header>
    )
}