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
                    <div className="info-text">
                        <span>호실</span>
                        <span className="highlight-wrapper">
                            <span className="highlight">518</span>
                            <span className="text">호</span>
                        </span>
                    </div>
                    <div className="info-text">
                        <span>오늘의 청소</span>
                        <span className="highlight-wrapper">
                            <span className="highlight">2</span>
                            <span className="text">학년</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
