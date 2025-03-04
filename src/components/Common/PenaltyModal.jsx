import React, { useState } from "react";
import "../../styles/PenaltyModal.css";
import { useStudents } from "../../context/StudentContext";
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
    const { updateStudent } = useStudents(); // Context에서 updateStudent 가져오기
    const [selectedPenalties, setSelectedPenalties] = useState([]);

    // 체크박스 선택 관리
    const togglePenalty = (reason) => {
        setSelectedPenalties((prev) => {
            const updatedSet = new Set(prev);
            if (updatedSet.has(reason)) {
                updatedSet.delete(reason);
            } else {
                updatedSet.add(reason);
            }
            return Array.from(updatedSet);
        });
    };


    const totalScore = selectedPenalties.reduce((sum, p) => sum + p.score, 0);

    const handleComplete = () => {
        updateStudent({
            ...student,
            score: student.score + totalScore,
        });
        onClose();
    };
    return (
        <dialog className="penalty-form-modal-overlay" open onClick={onClose}>
            <section className="penalty-form-modal-box" onClick={(e) => e.stopPropagation()}>

                <header className="penalty-form-modal-header">
                    <h2 className="penalty-form-title">벌점 주기</h2>
                    <button className="penalty-form-close-btn" onClick={onClose}>×</button>
                </header>

                <article className="penalty-form-modal-content">
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
                </article>

                <ul className="penalty-form-list">
                    {penaltyReasons.map((item, index) => (
                        <li key={index} className="penalty-form-item">
                            <div className="penalty-form-reason-box">
                                <span className="penalty-form-reason">{item.reason}</span>
                                <span className="penalty-form-points">{item.score}점</span>
                            </div>
                            <label className="custom-checkbox">
                                <input
                                    type="checkbox"
                                    checked={selectedPenalties.some((p) => p.reason === item.reason)}
                                    onChange={() => togglePenalty(item)}
                                    className="hidden-checkbox"
                                />
                                <span className="custom-checkmark">✔</span>
                            </label>
                        </li>
                    ))}
                </ul>
                <footer className="penalty-form-footer">
                    <button className="penalty-form-footer-btn" disabled={!selectedPenalties.length} onClick={handleComplete}>
                        완료 (+{totalScore}점)
                    </button>
                    <button className="penalty-form-footer-btn" onClick={onClose}>닫기</button>
                </footer>
            </section>
        </dialog>
    );
};

export default PenaltyModal;
