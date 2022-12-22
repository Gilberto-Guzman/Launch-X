import React from "react";
import { UserContext } from "../App";


const Username = () => {
    const value = React.useContext(UserContext);
    return <h1>{value}</h1>
}

export default Username;