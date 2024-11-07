import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Popup.css"

export default function Popup({ togglePopup }) {
    const navigate = useNavigate();

    const handleRedirect = () => {
        togglePopup(); 
        navigate("/signup"); 
    };

    return (
        <div className={styles.popup}>
            <div className={styles.overlay} onClick={togglePopup}></div>
            <div className={styles.content}>
            <a className={styles.exit}  onClick={togglePopup}><img src="/close.png" /></a>
                <h2 data-testid="popup">Oops</h2>
                <div className={styles.textImage}>
                    <p>для того, щоб виконати цю дію вам потрібно зареєструватись</p>
                    <img src="/puzzle.png" alt="puzzle icon" className={styles.puzzle} />
                </div>
                <div className={styles.rectangle}>
                <button className={styles.close} onClick={handleRedirect}>клік</button>
                </div>
            </div> 
        </div>
    );
}
