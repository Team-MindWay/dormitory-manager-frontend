import React, { useState } from "react";
import "../../styles/StudentEditModal.css";

const StudentEditModal = ({ student, onClose }) => {
    const [room, setRoom] = useState("");  // 기본값을 비워두고 placeholder로 표시
    const [score, setScore] = useState("");  // 기본값을 비워두고 placeholder로 표시
    const [role, setRole] = useState("일반 학생");

    return (
        <div className="student-edit-modal-overlay" onClick={onClose}>
            <div className="student-edit-modal-box" onClick={(e) => e.stopPropagation()}>
                {/* 모달 헤더 */}
                <div className="student-edit-modal-header">
                    <h2 className="student-edit-modal-title">학생 수정</h2>
                    <button className="student-edit-x-btn" onClick={onClose}>×</button>
                </div>

                {/* 학생 기본 정보 */}
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

                    {/* 수정 가능한 항목 (호실, 벌점, 역할) */}
                    <div className="student-edit-fields">
                        {/* 호실 입력 필드 */}
                        <div className="edit-field">
                            <span className="edit-field-label room-label">호실</span>
                            <input
                                type="text"
                                className="edit-input"
                                placeholder={`${student.room}`}  // 현재 호실을 placeholder로 설정
                                defaultValue={room}  // 초기값을 비워두고 placeholder 적용
                                onChange={(e) => setRoom(e.target.value)}
                            />
                        </div>

                        <div className="edit-field">
                            <span className="edit-field-label score-label">벌점</span>
                            <div className="edit-score-box">
                                <input
                                    type="number"
                                    className="edit-input score-input"
                                    placeholder={`${student.score}`}
                                    defaultValue={score}
                                    onChange={(e) => setScore(e.target.value)}
                                />
                                <span className="point-unit">점</span>
                            </div>
                        </div>


                        {/* 역할 선택 필드 */}
                        <div className="edit-field">
                            <span className="edit-field-label role-label">역할</span>
                            <select value={role} onChange={(e) => setRole(e.target.value)} className="edit-select">
                                <option hidden>역할 선택</option>  {/* 기본값: 선택되지 않음 */}
                                <option>일반 학생</option>
                                <option>기숙사 운영진</option>
                            </select>

                        </div>
                    </div>

                </div>

                {/* 완료 및 닫기 버튼 */}
                <div className="student-edit-footer">
                    <button className="student-edit-footer-btn complete-btn">완료</button>
                    <button className="student-edit-footer-btn close-btn" onClick={onClose}>닫기</button>
                </div>
            </div>
        </div>
    );
};

export default StudentEditModal;
