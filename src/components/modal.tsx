import React from 'react';

interface ModalProps {
    show: boolean;
    message: string;
}

const Modal: React.FC<ModalProps> = ({ show, message }) => {
    if (!show) return null; // Render nothing if show is false

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-10">
            <div className="bg-white p-4 rounded shadow-lg text-center">
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Modal;
