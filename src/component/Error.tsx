import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Error() {
    const navigate = useNavigate();
    useEffect(() => {
        let timer = setTimeout(() => {
            navigate("/");
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, []);
    return <div>Error</div>;
}

export default Error;
