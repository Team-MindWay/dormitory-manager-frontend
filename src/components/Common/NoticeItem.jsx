import React from "react";
import "../../styles/NoticeItem.css"; // 스타일 추가

const NoticeItem = ({ title, content, date }) => {
    return (
        <div className="notice-item">
            <div className="notice-content">
                <div className="notice-title">{title}</div>
                <div className="notice-text">{content}</div>
            </div>
            <div className="notice-date">{date}</div>
        </div>
    );
};

export default NoticeItem;
