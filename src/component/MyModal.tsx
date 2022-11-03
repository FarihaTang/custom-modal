import React, { useState } from "react";
import Modal from "./Modal";
function MyModal() {
    const [isOpen, setIsOpen] = useState(false);
    function toggleOpen() {
        setIsOpen((prevState) => !prevState);
    }
    function confirmCallback() {
        toggleOpen();
    }
    return (
        <>
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
export default MyModal;
