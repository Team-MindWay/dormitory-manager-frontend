import React, { useState } from "react";
import "../../styles/NoticeFormModal.css";

const NoticeFormModal = ({ onClose, onSubmit }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;
        onSubmit({ title, content });
        setTitle("");
        setContent("");
    };

    return (
        <div className="notice-modal-overlay" onClick={onClose}>
            <div className="notice-modal-box" onClick={(e) => e.stopPropagation()}>
                <div className="notice-modal-header">
                    <h2 className="notice-modal-title">공지 작성</h2>
                    <button className="notice-close-btn" onClick={onClose}>×</button>
                </div>

                <form className="notice-modal-form" onSubmit={handleSubmit}>
                    <div className="notice-form-group">
                        <label>제목</label>
                        <input
                            type="text"
                            className="notice-input"
                            placeholder="제목을 입력해주세요."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="notice-form-group">
                        <label>내용</label>
                        <textarea
                            className="notice-textarea"
                            placeholder="내용을 입력해주세요."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="notice-submit-btn">완료</button>
                </form>
            </div>
        </div>
    );
};

export default NoticeFormModal;
