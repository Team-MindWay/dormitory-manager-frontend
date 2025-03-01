import React from "react";
import "../../styles/PenaltyModal.css";

const PenaltyModal = ({ student, onClose }) => {
    return (
        <div className="penalty-modal-overlay" onClick={onClose}>
            <div className="penalty-modal-box" onClick={(e) => e.stopPropagation()}>
                <div className="penalty-modal-header">
                    <h2 className="penalty-modal-title">벌점 주기</h2>
                    <button className="penalty-close-btn" onClick={onClose}>×</button>
                </div>

                {/* 학생 정보 표시 */}
                <div className="penalty-student-info">
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

                <div className="penalty-modal-footer">
                    <button className="penalty-submit-btn">완료</button>
                    <button className="penalty-close-btn" onClick={onClose}>닫기</button>
                </div>
            </div>
        </div>
    );
};

export default PenaltyModal;
