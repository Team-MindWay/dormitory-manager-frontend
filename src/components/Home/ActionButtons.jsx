import React, { useState } from "react";
import "../../styles/ActionButtons.css";
import { FaClipboardList, FaUserEdit } from "react-icons/fa";
import CustomModal from "../Common/CustomModal";

const penaltyData = [
    { room: "518호", name: "김재관", score: "7" },
    { room: "518호", name: "김재관", score: "7" },
    { room: "518호", name: "김재관", score: "7" },
    { room: "518호", name: "김재관", score: "7" },
];

const studentData = [
    { room: "518호", name: "김재관", score: "-" },
    { room: "519호", name: "이민수", score: "-" },
    { room: "520호", name: "박준영", score: "-" },
    { room: "521호", name: "최예은", score: "-" },
];

const ActionButtons = () => {
    const [modalType, setModalType] = useState(null);

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

            {/* 모달 렌더링 */}
            {modalType === "penalty" && (
                <CustomModal title="벌점 주기" data={penaltyData} onClose={() => setModalType(null)} />
            )}
            {modalType === "editStudent" && (
                <CustomModal title="학생 수정" data={studentData} onClose={() => setModalType(null)} />
            )}
        </div>
    );
};

export default ActionButtons;
