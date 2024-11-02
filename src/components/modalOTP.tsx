import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";

const OTPModal = ({ fetchForms }: { fetchForms: () => void }) => {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [token, setToken] = useState("");
    const [isPhoneEntered, setIsPhoneEntered] = useState(false);
    const [referenceCode, setReferenceCode] = useState("17evu4ze");
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [tokenAuth, setTokenAuth] = useState("");
    const [canRequestOTP, setCanRequestOTP] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(50);

    useEffect(() => {
        if (!canRequestOTP) {
            const countdown = setInterval(() => {
                setSecondsLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(countdown);
                        setCanRequestOTP(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(countdown);
        }
    }, [canRequestOTP]);

    const handlePhoneSubmit = async () => {
        try {
            const res = await axios.post("/api/send-otp", { phone });
            setReferenceCode(res.data.refno);
            setToken(res.data.token);
            setIsPhoneEntered(true);
        } catch (err) {
            console.error(err);
            alert("Failed to send OTP.");
        }
    };

    const handleRequestOTP = () => {
        setCanRequestOTP(false);
        setSecondsLeft(50);
        handlePhoneSubmit();
    };

    const handleOTPSubmit = async () => {
        try {
            const res = await axios.post("/api/verify-otp", { phone, otp, reference: token });
            setTokenAuth(res.data.token);
            setIsFormVisible(true);
        } catch (err) {
            console.error(err);
            alert("OTP verification failed.");
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = {
            phone,
            name: (event.currentTarget.elements.namedItem("name") as HTMLInputElement).value,
            description: event.currentTarget.description.value,
        };

        try {
            await axios.post("/api/forms", formData, {
                headers: { Authorization: `Bearer ${tokenAuth}` },
            });
            fetchForms();
            closeModal();
        } catch (error) {
            console.error(error);
            alert("Form submission failed.");
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setIsPhoneEntered(false);
        setIsFormVisible(false);
        setTokenAuth("");
        setPhone("");
        setOtp("");
        setToken("");
        setReferenceCode("17evu4ze");
    };

    return (
        <>
            <button
                className="bg-gradient-to-r from-cyan-500 to-teal-400 hover:bg-gradient-to-l hover:from-teal-500 hover:to-cyan-400 text-white font-semibold px-6 py-3 rounded-md shadow-md text-lg justify-"
                onClick={() => setShowModal(true)}
                aria-label="Open blessing form text-white"
            >
                เขียนคำอวยพร
            </button>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md transform transition-all ease-in-out duration-300">
                        {!isPhoneEntered ? (
                            <div>
                                <h2 className="text-lg font-semibold mb-4">เข้าสู่ระบบด้วยเบอร์โทรศัพท์</h2>
                                <input
                                    type="text"
                                    placeholder="08xxxxxxxx"
                                    maxLength={10}
                                    value={phone}
                                    onChange={(e) => {
                                        if (/^\d*$/.test(e.target.value)) setPhone(e.target.value);
                                    }}

                                    className="w-full p-2 border border-gray-300 rounded mb-4 text-sm"
                                />
                                <button
                                    className="w-full bg-gradient-to-r from-cyan-500 to-teal-400 hover:bg-gradient-to-l hover:from-teal-500 hover:to-cyan-400 text-white py-2 rounded hover:bg-purple-600 text-sm"
                                    onClick={handlePhoneSubmit}
                                >
                                    ดำเนินการต่อ
                                </button>
                            </div>
                        ) : !isFormVisible ? (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">กรอกรหัส OTP</h2>
                                <input
                                    type="text"
                                    placeholder="รหัสยืนยัน"
                                    maxLength={4}
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mb-4 text-sm"
                                />
                                <p className="text-gray-600 mb-4 text-sm">
                                    ส่ง OTP แล้ว กรณียังไม่ได้รับ SMS ให้กด{" "}
                                    {canRequestOTP ? (
                                        <a href="#" onClick={handleRequestOTP} className="text-blue-500 underline">
                                            Request OTP
                                        </a>
                                    ) : (
                                        <span className="text-gray-400">Request OTP ({secondsLeft}s)</span>
                                    )}
                                </p>
                                <button
                                    className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 text-sm"
                                    onClick={handleOTPSubmit}
                                >
                                    ยืนยันรหัส OTP
                                </button>
                            </div>
                        ) : (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">เขียนคำอวยพร</h2>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="ชื่อผู้เขียนคำอวยพร"
                                        className="w-full p-2 border border-gray-300 rounded mb-4 text-sm"
                                    />
                                    <textarea
                                        name="description"
                                        required
                                        placeholder="คำอวยพร"
                                        className="w-full p-2 border border-gray-300 rounded mb-4 text-sm"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 text-sm"
                                    >
                                        ยืนยัน
                                    </button>
                                </form>
                            </div>
                        )}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            &times;
                        </button>
                    </div>
                </div>
                </div>
            )}
        </>
    );
};

export default OTPModal;
