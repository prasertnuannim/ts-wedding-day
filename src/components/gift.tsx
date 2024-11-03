import React, { useState, useEffect, useRef } from 'react';
import { BsCopy } from "react-icons/bs";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Modal from '@/components/modal';
import { TypeAnimation } from 'react-type-animation';

type Props = {}

const Gift = (props: Props) => {
    const accountNumber = '539-2-94333-5';
    const [copied, setCopied] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null); // Ref for backup copy method

    const handleCopy = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(accountNumber)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                })
                .catch((err) => {
                    console.error("Clipboard copy failed, falling back to input method:", err);
                    copyWithFallback();
                });
        } else {
            copyWithFallback(); // Use fallback if clipboard API is unsupported
        }
    };

    const copyWithFallback = () => {
        if (inputRef.current) {
            inputRef.current.value = accountNumber;
            inputRef.current.select();
            document.execCommand('copy'); // Fallback for unsupported browsers
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start({ x: 0, opacity: 1 });
        } else {
            controls.start({ x: -100, opacity: 0 });
        }
    }, [controls, inView]);

    useEffect(() => {
        if (copied) {
            setShowModal(true);
            setTimeout(() => setShowModal(false), 2000);
        }
    }, [copied]);

    return (
        <>
            <div
                ref={ref}             
                className='flex flex-col h-auto w-full bg-blue-300 shadow-2xl relative'
            >
                {/* <div className='flex flex-col'>
                    <p className='absolute inset-0 flex items-start justify-end text-xl pr-5 pt-1 text-gray-500 font-extrabold'>
                    มอบของขวัญให้คู่บ่าวสาว
                    </p>
                </div> */}

                <div>
                    <div className='flex flex-row items-center justify-between p-4'>
                        {/* Hidden Input for Fallback */}
                        <input
                            ref={inputRef}
                            value={accountNumber}
                            readOnly
                            style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
                            aria-hidden="true"
                        />

                        {/* QR Code Section */}
                        <div className='w-2/5 flex items-center justify-center pt-2'>
                            <img src='/QR-code.png' alt='QR Code' className='w-full h-full object-cover rounded-lg' />
                        </div>

                        <div className='w-3/5 text-left pl-4 '>
                        <p className=' text-[20px] pb-6 text-gray-500 font-extrabold'>
                    มอบของขวัญให้คู่บ่าวสาว
                    </p>
                            <p className='text-[16px] font-bold text-white pb-4'>
                                ธนาคาร <br/>
                                <span className='text-gray-500 text-[14px] font-medium'>กสิกรไทย</span>
                            </p>
                            <p className='text-[16px] font-bold text-white pb-4'>
                                ชื่อบัญชี <br/>
                                <span className='text-gray-500 text-[14px] font-medium'>น.ส. จารุวรรณ พันลำภักดิ์</span>
                            </p>
                            <p className='text-[16px] font-bold text-white pb-4'>
                                เลขที่บัญชี <br/>
                                <span className='text-gray-500 text-[14px] font-medium'>
                                    {accountNumber}
                                </span> <button
                                    className={`text-sm font-bold underline transition-all duration-200 relative ${copied ? 'text-gray-900 hover:text-white' : 'text-gray-500 hover:text-gray-600'
                                        }`}
                                    onClick={handleCopy}
                                    aria-label="Copy account number"
                                >
                                    Copy
                                </button>
                            </p>
                        </div>
                    </div>

                    {/* Modal Display */}
                    {showModal && (
                        <Modal
                            show={showModal}
                            message="Copied (คัดลอกเลขบัญชีแล้ว)"
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default Gift;
