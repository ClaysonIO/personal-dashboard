import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <NavLink to={"/"}>
                <h3>My Dashboard</h3>
            </NavLink>
            <NavLink to={"/edit"}>
                <button>Edit</button>
            </NavLink>
        </header>
    )
}