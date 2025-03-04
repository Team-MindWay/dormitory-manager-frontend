import React, { useState } from "react";
import { useStudents } from "../../context/StudentContext";
import "../../styles/StudentEditModal.css";

const StudentEditModal = ({ student, onClose }) => {
    const { updateStudent } = useStudents();

    const [room, setRoom] = useState(student.room);
    const [score, setScore] = useState(student.score);
    const [role, setRole] = useState(student.role || "일반 학생");
    const handleRoomChange = (e) => {
        let value = e.target.value.replace(/호/g, "").replace(/\D/g, "");
        setRoom(value === "" ? "" : Math.min(1000, Math.max(0, Number(value))));
    };


    // 벌점 입력 값 검증 
    const handleScoreChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value !== "") {
            value = Math.min(100, Math.max(0, Number(value)));
        }
        setScore(value);
    };

    // 완료 버튼 클릭 시 학생 정보 업데이트
    const handleComplete = () => {
        updateStudent({
            ...student,
            room: room.toString().includes("호") ? room : `${room}호`,
            score: Number(score),
            role,
        });
        onClose();
    };


    return (
        <div className="student-edit-modal-overlay" onClick={onClose}>
            <div className="student-edit-modal-box" onClick={(e) => e.stopPropagation()}>
                <div className="student-edit-modal-header">
                    <h2 className="student-edit-modal-title">학생 수정</h2>
                    <button className="student-edit-x-btn" onClick={onClose}>×</button>
                </div>

                <div className="student-edit-modal-content">
                    <div className="student-edit-info">
                        <div className="student-info-item">
                            <span className="info-label">호수</span>
                            <span className="info-value">{student.room}</span>
                        </div>
                        <div className="student-info-item">
                            <span className="info-label">이름</span>
                            <span className="info-value">{student.name}</span>
                        </div>
                        <div className="student-info-item">
                            <span className="info-label">벌점</span>
                            <span className="info-value">{student.score}점</span>
                        </div>
                    </div>

                    <div className="student-edit-fields">
                        {/* 호실 입력 필드 */}
                        <div className="edit-field">
                            <span className="edit-field-label room-label">호실</span>
                            <input
                                type="text"
                                className="edit-input"
                                placeholder={`${student.room}`}
                                value={room}
                                onChange={handleRoomChange}
                            />
                        </div>

                        <div className="edit-field">
                            <span className="edit-field-label score-label">벌점</span>
                            <div className="edit-score-box">
                                {/* 벌점 입력 필드 */}
                                <input
                                    type="text"
                                    className="edit-input score-input"
                                    placeholder={`${student.score}`}
                                    value={score}
                                    onChange={handleScoreChange}
                                />
                                <span className="point-unit">점</span>
                            </div>
                        </div>

                        {/* 역할 선택 필드 */}
                        <div className="edit-field">
                            <span className="edit-field-label role-label">역할</span>
                            <select value={role} onChange={(e) => setRole(e.target.value)} className="edit-select">
                                <option hidden>역할 선택</option>
                                <option>일반 학생</option>
                                <option>기숙사 운영진</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* 완료 및 닫기 버튼 */}
                <div className="student-edit-footer">
                    <button className="student-edit-footer-btn complete-btn" onClick={handleComplete}>완료</button>
                    <button className="student-edit-footer-btn close-btn" onClick={onClose}>닫기</button>
                </div>
            </div>
        </div>
    );
};

export default StudentEditModal;
