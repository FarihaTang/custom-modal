import React from "react";
import Postlist from "./PostList";
import UserList from "./UserList";
import "./Hoc.css";

function Hoc() {
    return (
        <div className="hocContainer">
            <h2>Higher Order Component</h2>
            <div className="hocContent">
                <UserList></UserList>
                <Postlist></Postlist>
            </div>
        </div>
    );
}

export default Hoc;
