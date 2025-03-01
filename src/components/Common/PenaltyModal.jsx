import React, { useState } from "react";
import "../../styles/PenaltyModal.css";

const penaltyReasons = [
    { reason: "불, 에어컨", score: 1 },
    { reason: "이불정리", score: 1 },
    { reason: "물건 분실", score: 1 },
    { reason: "타방", score: 3 },
    { reason: "라면, 배달", score: 3 },
    { reason: "쓰레기 무단 투기", score: 3 },
    { reason: "무단잔류", score: 30 },
];

const PenaltyModal = ({ student, onClose }) => {
    const [selectedPenalties, setSelectedPenalties] = useState([]);

    // 체크박스 선택 관리
    const togglePenalty = (reason) => {
        setSelectedPenalties((prev) =>
            prev.includes(reason)
                ? prev.filter((item) => item !== reason)
                : [...prev, reason]
        );
    };

    return (
        <div className="penalty-form-modal-overlay" onClick={onClose}>
            <div className="penalty-form-modal-box" onClick={(e) => e.stopPropagation()}>
                {/* 모달 헤더 */}
                <div className="penalty-form-modal-header">
                    <h2 className="penalty-form-title">벌점 주기</h2>
                    <button className="penalty-form-close-btn" onClick={onClose}>×</button>
                </div>

                {/* 학생 정보 */}
                <div className="penalty-form-modal-content">
                    <div className="penalty-form-student-header">
                        <span className="penalty-form-label">호수</span>
                        <span className="penalty-form-label">이름</span>
                        <span className="penalty-form-label">벌점</span>
                    </div>

                    <div className="penalty-form-student-info">
                        <span className="penalty-form-room">{student.room}</span>
                        <span className="penalty-form-name">{student.name}</span>
                        <span className="penalty-form-score">{student.score}점</span>
                    </div>
                </div>

                {/* 벌점 항목 리스트 */}
                <div className="penalty-form-list">
                    {penaltyReasons.map((item, index) => (
                        <div key={index} className="penalty-form-item">
                            <div className="penalty-form-reason-box">
                                <span className="penalty-form-reason">{item.reason}</span>
                                <span className="penalty-form-points">{item.score}점</span>
                            </div>
                            <label className="custom-checkbox">
                                <input
                                    type="checkbox"
                                    checked={selectedPenalties.includes(item.reason)}
                                    onChange={() => togglePenalty(item.reason)}
                                    className="hidden-checkbox"
                                />
                                <span className="custom-checkmark">✔</span>
                            </label>


                        </div>
                    ))}
                </div>

                {/* 완료 및 닫기 버튼 */}
                <div className="penalty-form-footer">
                    <button className="penalty-form-footer-btn" disabled={!selectedPenalties.length}>
                        완료
                    </button>

                    <button className="penalty-form-footer-btn" onClick={onClose}>닫기</button>
                </div>
            </div>
        </div>
    );
};

export default PenaltyModal;
