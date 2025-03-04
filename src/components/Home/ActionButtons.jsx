import React, { useState } from "react";
import "../../styles/ActionButtons.css";
import { FaClipboardList, FaUserEdit } from "react-icons/fa";
import StudentSelectModal from "../Common/StudentSelectModal";
import PenaltyModal from "../Common/PenaltyModal";
import StudentEditModal from "../Common/StudentEditModal";

const MODAL_TYPES = {
    PENALTY: "penalty",
    PENALTY_FORM: "penaltyForm",
    EDIT_STUDENT: "editStudent",
    EDIT_STUDENT_FORM: "editStudentForm",
};

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
    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleSelectStudent = (student, modalType) => {
        setSelectedStudent(student);
        setModalType(modalType);
    };

    return (
        <div className="action-buttons">
            {/* 벌점 주기 버튼 */}
            <button className="action-button" onClick={() => setModalType(MODAL_TYPES.PENALTY)}>
                <FaClipboardList className="button-icon" />
                <span className="button-text">벌점 주기</span>
            </button>

            {/* 학생 수정 버튼 */}
            <button className="action-button" onClick={() => setModalType(MODAL_TYPES.EDIT_STUDENT)}>
                <FaUserEdit className="button-icon" />
                <span className="button-text">학생 수정</span>
            </button>

            {/* 벌점 주기 (학생 선택 모달) */}
            {modalType === MODAL_TYPES.PENALTY && (
                <StudentSelectModal
                    title="벌점 주기"
                    data={penaltyData}
                    onClose={() => setModalType(null)}
                    onSelect={(student) => handleSelectStudent(student, MODAL_TYPES.PENALTY_FORM)}
                />
            )}

            {/* 벌점 부여 모달 (학생 선택 후) */}
            {modalType === MODAL_TYPES.PENALTY_FORM && selectedStudent && (
                <PenaltyModal student={selectedStudent} onClose={() => setModalType(null)} />
            )}

            {/* 학생 수정 (학생 선택 모달) */}
            {modalType === MODAL_TYPES.EDIT_STUDENT && (
                <StudentSelectModal
                    title="학생 수정"
                    data={studentData}
                    onClose={() => setModalType(null)}
                    onSelect={(student) => handleSelectStudent(student, MODAL_TYPES.EDIT_STUDENT_FORM)}
                />
            )}

            {/* 학생 수정 모달 (학생 선택 후) */}
            {modalType === MODAL_TYPES.EDIT_STUDENT_FORM && selectedStudent && (
                <StudentEditModal student={selectedStudent} onClose={() => setModalType(null)} />
            )}
        </div>
    );
};

export default ActionButtons;
