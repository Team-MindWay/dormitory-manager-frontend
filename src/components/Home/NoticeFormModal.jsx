import React, { useState } from "react";
import "../../styles/NoticeFormModal.css";

const NoticeFormModal = ({ onClose }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("새 공지:", { title, content });
        onClose(); // 제출 후 모달 닫기
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>공지 작성</h2>
                <button className="close-btn" onClick={onClose}>×</button>

                <form onSubmit={handleSubmit}>
                    <label>제목</label>
                    <input
                        type="text"
                        placeholder="제목을 입력해주세요."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <label>내용</label>
                    <textarea
                        placeholder="내용을 입력해주세요."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />

                    <button type="submit" className="submit-btn">완료</button>
                </form>
            </div>
        </div>
    );
};

export default NoticeFormModal;
