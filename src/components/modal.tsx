import React from 'react';

type ModalProps = {
    show: boolean;
    message: string;
}

const Modal = ({ show, message }: ModalProps) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center glass">
            <div className="bg-white p-2 rounded shadow-lg">
                <p className="text-lg font-bold">{message}</p>
                
            </div>
        </div>
    );
};

export default Modal;
