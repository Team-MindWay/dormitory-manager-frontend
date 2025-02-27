import React, { useState } from "react";
import "../../styles/ActionButtons.css";
import { FaClipboardList } from "react-icons/fa"; // 벌점 아이콘
import { FaUserEdit } from "react-icons/fa"; // 학생 수정 아이콘
import PenaltyFormModal from "../Common/PenaltyFormModal"; // 벌점 주기 모달 추가

const ActionButtons = () => {
    const [showPenaltyModal, setShowPenaltyModal] = useState(false);

    return (
        <div className="action-buttons">
            {/* 벌점 주기 버튼 */}
            <button className="action-button" onClick={() => setShowPenaltyModal(true)}>
                <FaClipboardList className="button-icon" />
                <span className="button-text">벌점 주기</span>
            </button>

            {/* 학생 수정 버튼 */}
            <button className="action-button">
                <FaUserEdit className="button-icon" />
                <span className="button-text">학생 수정</span>
            </button>

            {/* 벌점 주기 모달 */}
            {showPenaltyModal && <PenaltyFormModal onClose={() => setShowPenaltyModal(false)} />}
        </div>
    );
};

export default ActionButtons;
