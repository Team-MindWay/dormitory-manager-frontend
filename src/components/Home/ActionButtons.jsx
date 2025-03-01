import React, { useState } from "react";
import "../../styles/ActionButtons.css";
import { FaClipboardList, FaUserEdit } from "react-icons/fa";
import StudentSelectModal from "../Common/StudentSelectModal"; // ✅ 학생 선택 모달
import PenaltyModal from "../Common/PenaltyModal"; // ✅ 벌점 부여 모달
import StudentEditModal from "../Common/StudentEditModal"; // ✅ 학생 수정 모달 추가

const penaltyData = [
    { room: "518호", name: "김재관", score: "7" },
    { room: "519호", name: "이민수", score: "5" },
    { room: "520호", name: "박준영", score: "3" },
];

const studentData = [
    { room: "518호", name: "김재관", score: "-" },
    { room: "519호", name: "이민수", score: "-" },
    { room: "520호", name: "박준영", score: "-" },
    { room: "521호", name: "최예은", score: "-" },
];

const ActionButtons = () => {
    const [modalType, setModalType] = useState(null);
    const [selectedStudent, setSelectedStudent] = useState(null); // ✅ 선택된 학생 저장

    // 학생 선택 시 벌점 부여 모달 띄우기
    const handleSelectStudentForPenalty = (student) => {
        setSelectedStudent(student);
        setModalType("penaltyForm"); // ✅ 벌점 부여 모달 열기
    };

    // 학생 선택 시 학생 수정 모달 띄우기
    const handleSelectStudentForEdit = (student) => {
        setSelectedStudent(student);
        setModalType("editStudentForm"); // ✅ 학생 수정 모달 열기
    };

    return (
        <div className="action-buttons">
            {/* 벌점 주기 버튼 */}
            <button className="action-button" onClick={() => setModalType("penalty")}>
                <FaClipboardList className="button-icon" />
                <span className="button-text">벌점 주기</span>
            </button>

            {/* 학생 수정 버튼 */}
            <button className="action-button" onClick={() => setModalType("editStudent")}>
                <FaUserEdit className="button-icon" />
                <span className="button-text">학생 수정</span>
            </button>

            {/* 벌점 주기 (학생 선택 모달) */}
            {modalType === "penalty" && (
                <StudentSelectModal
                    title="벌점 주기"
                    data={penaltyData}
                    onClose={() => setModalType(null)}
                    onSelect={handleSelectStudentForPenalty} // ✅ 학생 선택 후 벌점 부여 모달 연결
                />
            )}

            {/* 벌점 부여 모달 (학생 선택 후) */}
            {modalType === "penaltyForm" && selectedStudent && (
                <PenaltyModal student={selectedStudent} onClose={() => setModalType(null)} />
            )}

            {/* 학생 수정 (학생 선택 모달) */}
            {modalType === "editStudent" && (
                <StudentSelectModal
                    title="학생 수정"
                    data={studentData}
                    onClose={() => setModalType(null)}
                    onSelect={handleSelectStudentForEdit} // ✅ 학생 선택 후 수정 모달 연결
                />
            )}

            {/* 학생 수정 모달 (학생 선택 후) */}
            {modalType === "editStudentForm" && selectedStudent && (
                <StudentEditModal student={selectedStudent} onClose={() => setModalType(null)} />
            )}
        </div>
    );
};

export default ActionButtons;
