import React from "react";
import NoticeItem from "../Common/NoticeItem";
import "../../styles/NoticeBoard.css";

const noticeData = [
    { title: "공지 제목", content: "공지내용공지내용공지내용공지내용공지내용공지내용...", date: "25.01.01" },
    { title: "공지 제목", content: "공지내용공지내용공지내용공지내용공지내용공지내용...", date: "25.01.01" },
    { title: "공지 제목", content: "공지내용공지내용공지내용공지내용공지내용공지내용...", date: "25.01.02" },
];

const NoticeBoard = () => {
    return (
        <div className="notice-board">
            <h2>공지사항</h2>
            <div className="notice-list">
                <div className="notice-divider"></div>

                {noticeData.map((notice, index) => (
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
        </div>


    );
};

export default NoticeBoard;
