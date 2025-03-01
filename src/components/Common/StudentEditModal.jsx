import React, { useState } from "react";
import "../../styles/StudentEditModal.css";

const StudentEditModal = ({ student, onClose }) => {
    const [room, setRoom] = useState(student.room);
    const [role, setRole] = useState("일반 학생");

    return (
        <div className="penalty-modal-overlay" onClick={onClose}>
            <div className="penalty-modal-box" onClick={(e) => e.stopPropagation()}>
                <div className="penalty-modal-header">
                    <h2 className="penalty-modal-title">학생 수정</h2>
                    <button className="penalty-close-btn" onClick={onClose}>×</button>
                </div>

                <div className="student-edit-content">
                    <div className="student-info">
                        <div>
                            <span className="info-label">호수</span>
                            <span className="info-value">{student.room}</span>
                        </div>
                        <div>
                            <span className="info-label">이름</span>
                            <span className="info-value">{student.name}</span>
                        </div>
                        <div>
                            <span className="info-label">벌점</span>
                            <span className="info-value">{student.score}점</span>
                        </div>
                    </div>

                    <div className="input-section">
                        <label>호실</label>
                        <input type="text" value={room} onChange={(e) => setRoom(e.target.value)} disabled />
                    </div>

                    <div className="input-section">
                        <label>역할</label>
                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                            <option>일반 학생</option>
                            <option>기숙사 운영진</option>
                        </select>
                    </div>

                    <div className="modal-footer">
                        <button className="submit-btn">완료</button>
                        <button className="close-btn" onClick={onClose}>닫기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentEditModal;
