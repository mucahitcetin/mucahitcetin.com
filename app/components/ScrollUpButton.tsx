"use client";
import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="p-3 rounded-full bg-secondary text-white text-xl shadow-lg hover:-translate-y-1 transition-all opacity-85 duration-200"
                >
                    <MdKeyboardDoubleArrowUp className="text-2xl" />
                </button>
            )}
        </div>
    );
};

export default ScrollUpButton;
