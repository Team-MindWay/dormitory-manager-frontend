import React, { useState, useEffect } from "react";
import "../../styles/Header.css";

const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    return (
        <div className="header">
            {/* ✅ 현재 시간 */}
            <div className="time-section">
                <span className="label">현재 시간</span>
                <span className="time">{formattedTime}</span>
            </div>

            {/* ✅ 사용자 정보 카드 */}
            <div className="user-info">
                <span className="id">1403 이산</span>
                <div className="divider"></div>
                <div className="info">
                    <div className="info-text">호실 <span className="highlight">518호</span></div>
                    <div className="info-text">오늘의 청소 <span className="highlight">2학년</span></div>
                </div>
            </div>
        </div>
    );
};

export default Header;
