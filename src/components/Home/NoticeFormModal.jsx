import React, { useState } from "react";
import "../../styles/NoticeFormModal.css";

const NoticeFormModal = ({ onClose }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("새 공지:", { title, content });
        onClose(); // ✅ 제출 후 모달 닫기
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">공지 작성</h2>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>

                {/* ✅ 입력 폼 */}
                <form className="modal-form" onSubmit={handleSubmit}>
                    {/* 제목 입력 */}
                    <div className="form-group">
                        <label>제목</label>
                        <input
                            type="text"
                            placeholder="제목을 입력해주세요."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    {/* 내용 입력 */}
                    <div className="form-group">
                        <label>내용</label>
                        <textarea
                            placeholder="내용을 입력해주세요."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </div>

                    {/* 완료 버튼 */}
                    <button type="submit" className="submit-btn">완료</button>
                </form>
            </div>
        </div>
    );
};

export default NoticeFormModal;
