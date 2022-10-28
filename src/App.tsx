import React, { Suspense, useState } from "react";
import "./App.css";
import Modal from "./component/Modal";
import logo from "./logo.svg";

const LazyLoding = React.lazy(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return import("./component/LazyLoding");
});
function App() {
    // Modal
    const [isOpen, setIsOpen] = useState(false);
    function toggleOpen() {
        setIsOpen((prevState) => !prevState);
    }
    function confirmCallback() {
        toggleOpen();
    }
    return (
        <>
            <Suspense fallback={<img src={logo} alt="" />}>
                <LazyLoding></LazyLoding>
            </Suspense>
            <button onClick={() => toggleOpen()}>custom modal</button>
            <Modal
                open={isOpen}
                onClose={toggleOpen}
                onConfirm={confirmCallback}
                innerText="Are you sure?"
            ></Modal>
        </>
    );
}

export default App;
