// useNotification.jsx
import { useState, useEffect } from "react";

const useNotification = () => {
    const [notification, setNotification] = useState(""); 

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => setNotification(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    return{
        notification,
        setNotification
    }; 
};

export default useNotification;
