import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    innerText: string;
}
function Modal({ open, onClose, onConfirm, innerText }: ModalProps) {
    if (!open) return null;
    return ReactDOM.createPortal(
        <>
            <div className="overlay" onClick={() => onClose()}></div>
            <div className="content">
                <div className="header">
                    <span>Modal</span>
                    <button className="close" onClick={() => onClose()}>
                        close
                    </button>
                </div>
                <div className="body">{innerText}</div>
                <div className="footer">
                    <button className="cancel" onClick={() => onClose()}>
                        cancel
                    </button>
                    <button className="sure" onClick={onConfirm}>
                        sure
                    </button>
                </div>
            </div>
        </>,
        document.getElementById("protal")!
    );
}

export default Modal;
