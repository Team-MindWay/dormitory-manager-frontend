import React, { useState } from "react";
import NoticeItem from "../Common/NoticeItem";
import NoticeFormModal from "./NoticeFormModal";
import "../../styles/NoticeBoard.css";

const NoticeBoard = () => {
    const [showModal, setShowModal] = useState(false);
    const [notices, setNotices] = useState([
        { title: "공지 제목", content: "공지내용공지내용공지내용공지내용공지내용공지내용...", date: "25.01.01" },
        { title: "공지 제목", content: "공지내용공지내용공지내용공지내용공지내용공지내용...", date: "25.01.01" },
        { title: "공지 제목", content: "공지내용공지내용공지내용공지내용공지내용공지내용...", date: "25.01.02" },
    ]);

    const handleAddNotice = (newNotice) => {
        setNotices((prevNotices) => [
            { ...newNotice, date: new Date().toISOString().slice(2, 10).replace(/-/g, ".") },
            ...prevNotices,
        ]);
        setShowModal(false);
    };

    return (
        <div className="notice-board">
            <h2>공지사항</h2>
            <div className="notice-list">
                {notices.map((notice, index) => (
                    <React.Fragment key={index}>
                        <div className="notice-divider-container">
                            <div className="notice-divider"></div>
                            <div className="notice-date">{notice.date}</div>
                            <div className="notice-divider"></div>
                        </div>
                        <NoticeItem title={notice.title} content={notice.content} />
                    </React.Fragment>
                ))}
            </div>

            <button className="add-notice-btn" onClick={() => setShowModal(true)}>+</button>

            {showModal && <NoticeFormModal onClose={() => setShowModal(false)} onSubmit={handleAddNotice} />}
        </div>
    );
};

export default NoticeBoard;
